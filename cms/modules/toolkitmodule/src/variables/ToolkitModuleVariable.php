<?php
/**
 * Toolkit module for Craft CMS 3.x
 *
 * Twig helper and helper functions.
 *
 * @link      https://www.elfacht.com
 * @copyright Copyright (c) 2021 Martin Szymanski
 */

namespace modules\toolkitmodule\variables;

use modules\toolkitmodule\ToolkitModule;

use Craft;

/**
 * Toolkit Variable
 *
 * Craft allows modules to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.toolkitModule }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author    Martin Szymanski
 * @package   ToolkitModule
 * @since     1.0.0
 */
class ToolkitModuleVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Whatever you want to output to a Twig template can go into a Variable method.
     * You can have as many variable functions as you want.  From any Twig template,
     * call it like this:
     *
     *     {{ craft.toolkitModule.exampleVariable }}
     *
     * Or, if your variable requires parameters from Twig:
     *
     *     {{ craft.toolkitModule.exampleVariable(twigValue) }}
     *
     * @param null $optional
     * @return string
     */
    public function exampleVariable($optional = null)
    {
        $result = "And away we go to the Twig template...";
        if ($optional) {
            $result = "I'm feeling optional today...";
        }
        return $result;
    }
}
