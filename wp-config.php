<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'tfml' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'V!GBQ%N&<&TrDA!oa9gc5,V!H@Mqbs+vhT (|5l~8y00E%]6_ O|F#;EPE=7PUZ+');
define('SECURE_AUTH_KEY',  '8R9&-|A<,6x+e E<An.:^elic$tv7ki6D!6}p3b/80Y/XQp4z2.+NA%,qbH;Tf6E');
define('LOGGED_IN_KEY',    '%PosGaQgw[^t&9|`b99G.Bw].|FgUE;JG<U%CtF(!bGb8 |6oJNi2V5a+&iAH$@P');
define('NONCE_KEY',        '!-xF)3h{=aM0dKfEJFngz.-O+qm`::7EY|pi3`-6;0WoRBk7!75Ri9A2)_5Xal62');
define('AUTH_SALT',        'zUpM1Lk6j!qIL~+i}-~Co!N=30>9@|W~Gz*?/}sV{}SU-8fF6`fvNoZILdx+-QgV');
define('SECURE_AUTH_SALT', '~$/<F;ncbX:<BhDwDNw(O7*)B/)y]N`]Q/MUe87ZMu,0ZK[!;V4p;~|:T%I Ki-)');
define('LOGGED_IN_SALT',   '9-OKhPbF%&PU3IGJuPf*;X#G{Ki0le$MY#3[&s@kTNVGOZd&?ze4a~+xQgKL4DE+');
define('NONCE_SALT',       'DR_>Im+VI>40B@*~R6wg<]r^~/XC)dbu}(Sf|IX+_k|jLXv1Q2z+^=79%DMYRP|@');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
