<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'uwi' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'YcA0%Up?klu>QYG97_nXNkZ4EEME;!)8h?7o9.sJ7VwU[jB~[mw),oiur$iE/,ZB' );
define( 'SECURE_AUTH_KEY',  'p4Y9+-sgm<h2Lb:g{ng4Xs-/Qh>.%IN.blwvLc^D}%68qTXFxVj!P98/U1^FG~sN' );
define( 'LOGGED_IN_KEY',    'A9a!x)1[aNal*K!i]O.&D@l;?;FwB?YWCNl*)73n<[m:*.Ue7hOqp+$3?:76dsxD' );
define( 'NONCE_KEY',        'O|64=<pn@B6.AyK+mPVL|`_d~u7O%-[k[5*-1y[4JVc_#8l~=Kx.<Pa%:req(:9w' );
define( 'AUTH_SALT',        '!(<BuF1:PsYMt|(~!U+JG&D7*l,K,JLb]:T< &+rb(6-#7FRFpeAs]+/s;?6/H@V' );
define( 'SECURE_AUTH_SALT', '9v>puf$^2i!pP~yaMYoaoTvvn+p[Io]PKv&ZCKENm3E`ODmFa;og1UCsZ5d)rQS5' );
define( 'LOGGED_IN_SALT',   '/0$H9.`Ad!HGp_X-`mCkm;YewZ_KRi4~3C%b%YS/aS$>z,J=sR~Q{A`1Gxu`.dY8' );
define( 'NONCE_SALT',       'v&o^Hx-nECThssvzfoUljHA$^vc,a<n&|d1~Dvf9~4Lll|h~YgenY7P?ZTxJTy+l' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'stuuvi_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
