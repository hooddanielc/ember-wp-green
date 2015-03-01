<?php
  /**
   * Plugin Name: SEXY REST API
   * Description: A REST framework to help the excitement of the mind evolve to a high level of feeling or activity
   * Version: 0.0.0
   * Author: Daniel Hood
   * Author URI: http://www.havenofcode.com
   * License: I don't have time for this
   */

  // a test for adding query variables
  function sexy_json_api_init() {
    // add some rewrite ruls
    add_rewrite_rule( '^sexy-json/?$','index.php?sexy_json_route=/','top' );
    add_rewrite_rule( '^sexy-json(.*)?','index.php?sexy_json_route=$matches[1]','top' );

    global $wp;
    $wp->add_query_var('sexy_json_route');

    error_log("ANNITION");
  }

  add_action('init', 'sexy_json_api_init');

  // a test for overriding http response
  // in case specific http query variable is
  // being used while modifying the content type
  function sexy_json_api_loaded() {
    global $wp;

    // json encodes if this is an api request
    if (!empty($wp->query_vars['sexy_json_route'])) {
      header('Content-Type: application/json');
      echo json_encode($wp->query_vars);
      die();
    }
  }

  add_action('template_redirect', 'sexy_json_api_loaded');
  
  function add_vary_header($headers) {
      error_log('add_very_header');
      $headers['Vary'] = 'User-Agent';
      return $headers;
  }

  add_filter('wp_headers', 'add_vary_header');
?>
