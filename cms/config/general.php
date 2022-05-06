<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [

	// All environments
	'*' => [
		'omitScriptNameInUrls' => true,
		'cpTrigger' => 'admin',

		// Environment-specific variables (see https://craftcms.com/docs/multi-environment-configs#environment-specific-variables)
    	'aliases' => array(
			'@baseUrl' => getenv('DEFAULT_SITE_URL'),
			'@assetBaseUrl' => getenv('DEFAULT_SITE_URL') . '/assets/',
    		'@assetBasePath' => dirname(__DIR__) . '/web/assets/',
		),

		// Chose plugins and functions
		'setup' => array(
			'criticalCss' => false,
			'useRSS' => false,
			'styleguide' => [
				'atomic' => [
					'path' => 'styleguide',
				],
				'partials' => [
					'path' => 'partials/_'
				]
			],
			'mediaQueries' => array(
				'medium' => 520,
				'large' => 769,
				'xlarge' => 1440,
			),
		),

		// Default Week Start Day (0 = Sunday, 1 = Monday...)
		'defaultWeekStartDay' => 1,

		# Entry revisions to keep
		'maxRevisions' => 5,

		// Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
		'enableCsrfProtection' => true,
		'imageDriver' => 'imagick',
		'defaultImageQuality' => 100,
		'securityKey' => getenv('SECURITY_KEY'),
		'phpSessionName' => 'SessionId',
		'sendPoweredByHeader' => false,
		'errorTemplatePrefix' => "pages/errors/",
		'privateTemplateTrigger' => '',
		'sendPoweredByHeader' => false,

		// Search options
		'defaultSearchTermOptions' => array(
			'subLeft' => true,
			'subRight' => true
		),
	],

	// Dev site URL
	'dev' => [
		'devMode' => true,
		'cache' => false,
		'membersOnly' => false,
		'trackerId' => 3,
		'enableTracking' => false,
		'enableTemplateCaching' => false,
		'aliases' => array(
			'staticAssetsVersion' => time(),
		),
  	],

	// Public site URL
	'staging' => [
		'devMode' => false,
		'cache' => true,
		'membersOnly' => false,
		'trackerId' => 2,
		'enableTracking' => true,
		'enableTemplateCaching' => true,
		'allowAdminChanges' => true,
	],

	// Public site URL
  	'production' => [
		'devMode' => false,
		'cache' => true,
		'membersOnly' => false,
		'trackerId' => 1,
		'enableTracking' => true,
		'enableTemplateCaching' => true,
    	'allowAdminChanges' => false,
	],

];
