<?php
  /** Theme setup */
  require_once( 'inc/theme-setup.php' );

  function enqueue_wkode_scripts() {
    wp_enqueue_style('wkode_main_styles', get_stylesheet_uri());
    wp_enqueue_style('main-css', get_template_directory_uri() . '/dist/main.min.css');
    wp_enqueue_script('main-js', get_theme_file_uri('/dist/main.min.js'), NULL, '1.0', true);
    wp_enqueue_script('wkode-font_awesome', '//kit.fontawesome.com/fde7c29e46.js', NULL, '1.0', true);
    wp_enqueue_script('blocks', get_theme_file_uri('/build/index.js'), NULL, '1.0', true);
  }
  add_action( 'wp_enqueue_scripts', 'enqueue_wkode_scripts' );

  //queing the styles and scripts in the blocks preview
  add_action( 'enqueue_block_editor_assets', 'enqueue_wkode_scripts' );

  // Enable ACF JSON
  add_filter('acf/settings/save_json', 'my_acf_json_save_point');
  function my_acf_json_save_point( $path ) {
      // update path
      $path = get_stylesheet_directory() . '/acf-json';
      // return
      return $path;
  }

  // Load ACF JSON
  add_filter('acf/settings/load_json', 'my_acf_json_load_point');
  function my_acf_json_load_point( $paths ) {
      // remove original path (optional)
      unset($paths[0]);
      // append path
      $paths[] = get_stylesheet_directory() . '/acf-json';
      // return
      return $paths;
  }


class CustomSliderBlock {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_register_script(
            'custom-slider-block',
            get_template_directory_uri() . '/build/index.js', 
            array('wp-blocks', 'wp-element', 'wp-editor'),    
            filemtime(get_template_directory() . '/build/index.js') 
        );
        
        register_block_type('wkode/custom-slider-block', array(
            'editor_script' => 'custom-slider-block',
            'render_callback' => array($this, 'theHTML')      
        ));
    }

    function theHTML($attributes) {
        if (empty($attributes['images'])) {
            return '';
        }

        ob_start();
        echo '<div class="custom-slider">';
        foreach ($attributes['images'] as $image) {
            if (isset($image['url'])) {
                var_dump($image);
                echo '<div class="slider-image">';
                echo '<img src="' . esc_url($image['url']) . '" alt="Slider Image">';
                echo '</div>';
            }
        }
        echo '</div>';

        return ob_get_clean();
    }
}

$customSliderBlock = new CustomSliderBlock();

class AccordionBlock {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_register_script(
            'accordion-block',
            get_template_directory_uri() . '/build/index.js', 
            array('wp-blocks', 'wp-element', 'wp-editor'),    
            filemtime(get_template_directory() . '/build/index.js') 
        );
        
        register_block_type('wkode/accordion-block', array(
            'editor_script' => 'accordion-block',
            'render_callback' => array($this, 'theHTML')      
        ));
    }

    function theHTML($attributes, $content) {
        ob_start();

        echo '<div class="accordion-wrapper">';

        if (!empty($attributes['title'])) {
            echo '<h3>' . esc_html($attributes['title']) . '</h3>';
        }

        echo '<div class="accordion-content">' . $content . '</div>';
        echo '</div>';

        return ob_get_clean();
    }
}

$customAccordionBlock = new AccordionBlock();

class WikiStatsBlock {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_register_script(
            'wiki-stats-block',
            get_template_directory_uri() . '/build/index.js', 
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-api-fetch'),    
            filemtime(get_template_directory() . '/build/index.js') 
        );
        
        register_block_type('wkode/wiki-stats', array(
            'editor_script' => 'wiki-stats-block',
            'render_callback' => array($this, 'renderWikiStatsBlock'),      
        ));
    }

    function renderWikiStatsBlock($attributes) {
        $year = isset($attributes['year']) ? $attributes['year'] : date('Y');
        $month = isset($attributes['month']) ? $attributes['month'] : date('m');
        $day = isset($attributes['day']) ? $attributes['day'] : date('d');

        $url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/US/mobile-app/{$year}/{$month}/{$day}";

        $response = wp_remote_get($url);

        if (is_wp_error($response)) {
            return __('Error fetching data', 'your-text-domain');
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body);

        if (!$data || empty($data->items)) {
            return __('No data available', 'your-text-domain');
        }

        ob_start();
        ?>
        <div class="wiki-stats-block">
            <h3>Pageviews for <?php echo "{$year}-{$month}-{$day}"; ?></h3>
            <ul>
                <?php foreach ($data->items[0]->articles as $article) : ?>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/<?php echo urlencode($article->article); ?>" target="_blank">
                            <?php echo $article->article; ?>
                        </a>
                        - <?php echo $article->views_ceil; ?> views
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php
        return ob_get_clean();
    }
}

$customWikiStatsBlock = new WikiStatsBlock();


?>