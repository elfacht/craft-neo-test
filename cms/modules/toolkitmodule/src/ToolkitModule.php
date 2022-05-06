<?php
/**
 * Toolkit module for Craft CMS 3.x
 *
 * Twig helper and helper functions.
 *
 * @link      https://www.elfacht.com
 * @copyright Copyright (c) 2021 Martin Szymanski
 */

namespace modules\toolkitmodule;

use modules\toolkitmodule\assetbundles\toolkitmodule\ToolkitModuleAsset;
use modules\toolkitmodule\variables\ToolkitModuleVariable;
use modules\toolkitmodule\twigextensions\ToolkitModuleTwigExtension;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;
use craft\web\View;
use craft\web\twig\variables\CraftVariable;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://craftcms.com/docs/plugins/introduction
 *
 * @author    Martin Szymanski
 * @package   ToolkitModule
 * @since     1.0.0
 *
 */
class ToolkitModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this module class so that it can be accessed via
     * ToolkitModule::$instance
     *
     * @var ToolkitModule
     */
    public static $instance;


    /**
     * Style guide template rendering
     *
     * @example
     *
     *      {{craft.toolkitModule.styleguide({
     *		    type: 'components',
     *		    name: 'icon',
     *		    options: {
     *		    	value: 'arrow'
     *		    }
     *	    })}}
     *
     * @param {Array} $params – required
     * @return {String}
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

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/toolkitmodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\toolkitmodule\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@modules/toolkitmodule/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * Set our $instance static property to this class so that it can be accessed via
     * ToolkitModule::$instance
     *
     * Called after the module class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

        // Load our AssetBundle
        if (Craft::$app->getRequest()->getIsCpRequest()) {
            Event::on(
                View::class,
                View::EVENT_BEFORE_RENDER_TEMPLATE,
                function (TemplateEvent $event) {
                    try {
                        Craft::$app->getView()->registerAssetBundle(ToolkitModuleAsset::class);
                    } catch (InvalidConfigException $e) {
                        Craft::error(
                            'Error registering AssetBundle - '.$e->getMessage(),
                            __METHOD__
                        );
                    }
                }
            );
        }

        // Add in our Twig extensions
        Craft::$app->view->registerTwigExtension(new ToolkitModuleTwigExtension());

        // Register our variables
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('toolkitModule', ToolkitModuleVariable::class);
            }
        );

/**
 * Logging in Craft involves using one of the following methods:
 *
 * Craft::trace(): record a message to trace how a piece of code runs. This is mainly for development use.
 * Craft::info(): record a message that conveys some useful information.
 * Craft::warning(): record a warning message that indicates something unexpected has happened.
 * Craft::error(): record a fatal error that should be investigated as soon as possible.
 *
 * Unless `devMode` is on, only Craft::warning() & Craft::error() will log to `craft/storage/logs/web.log`
 *
 * It's recommended that you pass in the magic constant `__METHOD__` as the second parameter, which sets
 * the category to the method (prefixed with the fully qualified class name) where the constant appears.
 *
 * To enable the Yii debug toolbar, go to your user account in the AdminCP and check the
 * [] Show the debug toolbar on the front end & [] Show the debug toolbar on the Control Panel
 *
 * http://www.yiiframework.com/doc-2.0/guide-runtime-logging.html
 */
        Craft::info(
            Craft::t(
                'toolkit-module',
                '{name} module loaded',
                ['name' => 'toolkit']
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
}
