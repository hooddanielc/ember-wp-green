<?php
  /**
   * Plugin Name: SEXY REST API
   * Description: A REST framework to help the excitement of the mind evolve to a high level of feeling or activity
   * Version: 0.0.0
   * Author: Daniel Hood
   * Author URI: http://www.havenofcode.com
   * License: I don't have time for this
   */

  // testing slim app framework
  require_once dirname( __FILE__ ) . '/vendor/autoload.php';

  function get_sexy_endpoint($endpoint = '') {
    return '/sexy-json'.$endpoint.'/';
  }

  // a test for adding query variables
  function sexy_json_api_init() {
    add_rewrite_rule( '^sexy-json/?$','index.php?sexy_json_route=/', 'top');
    add_rewrite_rule( '^sexy-json(.*)?','index.php?sexy_json_route=$matches[1]', 'top');

    global $wp;
    $wp->add_query_var('sexy_json_route');
  }

  add_action('init', 'sexy_json_api_init');

  // a test for overriding http response
  // in case specific http query variable is
  // being used while modifying the content type
  function sexy_json_api_loaded() {
    global $wp;

    if (!empty($wp->query_vars['sexy_json_route'])) {
      $app = new \Slim\Slim(array(
        'debug' => true,
        'log.enabled' => true
      ));

      // simple test for root endpoint
      $app->get(get_sexy_endpoint(), function () {
        echo json_encode(array('a', 'b', 'c', 'd'));
      });

      $app->get(get_sexy_endpoint('/posts'), function () {
        $posts = get_posts();
        echo json_encode($posts);
      });

      $app->get(get_sexy_endpoint('/posts/:id'), function ($id) {
        $obj = array(
          'post' => get_post($id),
          'comments' => get_comments(array(
            'post_ID' => $id
          ))
        );

        echo json_encode($obj);
      });

      $app->response->headers->set('Content-Type', 'application/json');
      $app->run();
      die();
    }
  }

  add_action('template_redirect', 'sexy_json_api_loaded', -100);
?>