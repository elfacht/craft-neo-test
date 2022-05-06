<?php
/**
 * Toolkit module for Craft CMS 3.x
 *
 * Twig helper and helper functions.
 *
 * @link      https://www.elfacht.com
 * @copyright Copyright (c) 2021 Martin Szymanski
 */

namespace modules\toolkitmodule\twigextensions;

use modules\toolkitmodule\ToolkitModule;

use Craft;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Martin Szymanski
 * @package   ToolkitModule
 * @since     1.0.0
 */
class ToolkitModuleTwigExtension extends AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'ToolkitModule';
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('styleguide', [$this, 'styleguide']),
            new TwigFunction('saveTransform', [$this, 'saveTransform']),
            new TwigFunction('imageRatio', [$this, 'imageRatio']),
            new TwigFunction('imageMediaQueries', [$this, 'imageMediaQueries']),
            new TwigFunction('assetDate', [$this, 'assetDate']),
            new TwigFunction('savingTargetBlank', [$this, 'savingTargetBlank']),
            new TwigFunction('lazyLoad', [$this, 'lazyLoad']),
            new TwigFunction('truncate', [$this, 'truncate']),
        ];
    }

    /**
     * Style guide template rendering
     *
     * @example
     *
     *      {{styleguide({
     *		    type: 'components',
     *		    name: 'icon',
     *		    options: {
     *		    	value: 'arrow'
     *		    }
     *	    })}}
     *
     * @param array $params – required
     * @return string
     */
    public function styleguide($params = []) {
        $type = $params['type'];
        $name = $params['name'];
        $options = $params['options'] ?? [];
        $atomicPath = Craft::$app->config->general->{'setup'}['styleguide']['atomic']['path'];
        $partialsPath = Craft::$app->config->general->{'setup'}['styleguide']['partials']['path'];

        $prefix = (object) [
            'components' => "$atomicPath/01_",
            'modules' => "$atomicPath/02_",
            'organisms' => "$atomicPath/03_",
            'templates' => "$atomicPath/04_",
        ];

        if ($type === '_') {
            $path = "$partialsPath/_$name";
        } else {
            $path = "{$prefix->$type}$type/$name/_$name";
        }

        $template = Craft::$app->getView()->renderTemplate($path, $options);

        echo $template;
    }


    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            new TwigFilter('formatter', [$this, 'formatter']),
            new TwigFilter('truncate', [$this, 'truncate']),
        ];
    }

     /**
     * Format phone number to valid link format
     *
     * @example
     *
     *      <a href="tel:{{phoneNumber | formatter('phone')}}">
     *          {{phoneNumber}}
     *      </a>
     *
     * @param string $string – required
     * @return string
     */
    public function formatter($string = null, $type = null) {
        $output = (object) [
            'phone' => str_replace(['(', ')', ' ', '.', '-'], '', $string),
        ];

        return $output->$type ?? $string;
    }


    /**
     * Truncate string after [<number>] characters.
     *
     * @example
     *
     *      {{'My long text is very long.' | truncate(10)}}
     *
     * @param string $string – required
     * @param number $length – optional|default
     */
    public function truncate($string = null, $length = 100) {
        $output = (strlen($string) > $length) ? substr($string, 0, $length) . '…' : $string;
        return $output;
    }


    /**
     * Get image transform url without upscale the image
     * if original image width is smaller than the transform.
     *
     * @example
     *
     *      {{saveTransform(image, 'transformName')}}
     *
     * @param object $image – required
     * @param number $transform – required
     * @return string
     */
    public function saveTransform($image = null, $transform = null) {
        $originalWidth = $image->getWidth();
        $desiredWidth = $image->getWidth($transform);
        $format = ($desiredWidth < $originalWidth) ? $image->getUrl($transform) : $image->getUrl();
        return $format;
    }

    /**
     * Calculate image ratio for faux lazy loading and
     * reserved aspect ratio while image loading.
     *
     * @example
     *
     *      style="{{imageRatio(300, 600)}}"
     *
     * @param number $width – required
     * @param number $height – required
     * @return string
     */
    public function imageRatio($height, $width) {
        # Safari sucks at ratios with large values,
        # so brother needs Extrawurst.
        $ratio = 16;
        $newHeight = floor(($height / $width) * $ratio);
        return "--image-ratio: $ratio / $newHeight;";
    }

    /**
     * Get mediaQueries values from general.php for
     * responsive images in image component.
     *
     * @example
     *
     *      {{imageMediaQueries('medium')}}
     *
     * @param string $size – required
     * @return string
     */
    public function imageMediaQueries($size) {
        $getSize = Craft::$app->config->general->{'setup'}['mediaQueries'][$size];

        $query = (object) array(
            'medium' => $getSize,
            'large' => $getSize,
            'xlarge' => $getSize
        );

        return "(min-width: {$query->$size}px)";
    }

    /**
     * Get SVG file date for cache busting asset version
     *
     * @example
     *
     *      {{assetDate('path/to/file.svg')}}
     *
     * @param string $file – required
     * @return number
     */
    public function assetDate($file) {
        return filemtime($file);
    }


    /**
     * For save target="_blank" links.
     *
     * @see https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
     *
     * @example
     *
     *      <a href="#" {{savingTargetBlank}} />
     */
    public function savingTargetBlank() {
        return 'target="_blank" rel="noreferrer noopener"';
    }


    /**
     * Lozad plugin (lazy loading) declarations.
     *
     * @see https://apoorv.pro/lozad.js/
     *
     * @example
     *
     *      <img {{lazyLoad('attr')}}src="image.jpg" />
     *
     * @param string $type – required|null
     * @return string
     */
    public function lazyLoad($type = null ) {
        if (Craft::$app->request->isPreview) {
            $output = null;
        } else {
            $output = (object) [
                'attr' => 'data-',
                'class' => 'lozad'
            ];
        }

        return $output->$type ?? null;
    }

}
