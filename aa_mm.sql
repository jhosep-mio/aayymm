-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2023 a las 16:43:33
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aa&mm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `imagen` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `imagen`, `created_at`, `updated_at`) VALUES
(1, 'Material de Construcción', '115510-LOGO_COLOR_(2).png', '2023-05-06 16:53:54', '2023-05-06 16:55:10'),
(3, '123213', '121158-100WHEYENERGY.png', '2023-05-06 17:11:58', '2023-05-06 17:11:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_04_25_172029_create_roles_table', 1),
(8, '2023_04_28_171334_create_users_table', 2),
(9, '2023_04_29_104403_create_categorias_table', 2),
(10, '2023_04_29_122205_create_productos_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\User', 1, 'auth_token', '3a6cc1b1fdaae8ed7e334742291f331d93ab4e38e5191ad9aaf7719a800e9877', '[\"*\"]', '2023-05-06 16:45:55', NULL, '2023-05-06 16:38:44', '2023-05-06 16:45:55'),
(3, 'App\\Models\\User', 1, 'auth_token', 'feea93355dd460c05807cc5c51ccdf1b0cf47c9b79fb2d0b047cc9521a3776a4', '[\"*\"]', '2023-05-06 17:46:44', NULL, '2023-05-06 16:53:00', '2023-05-06 17:46:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_categoria` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `imagen1` varchar(191) NOT NULL,
  `precio` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `id_categoria`, `nombre`, `imagen1`, `precio`, `created_at`, `updated_at`) VALUES
(1, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(3, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(8, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(9, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(10, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(11, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(12, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(13, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(14, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(15, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(16, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(17, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(18, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(19, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(20, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(21, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(22, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(23, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55'),
(24, 1, 'adasdadasd', '121148-con_capa.png', '123123.00', '2023-05-06 17:11:48', '2023-05-06 17:11:48'),
(25, 1, 'pruebando3333', '120555-sombrerera-rosada-grande-con-girasoles-y-flores-lilas.webp', '99.00', '2023-05-06 16:58:39', '2023-05-06 17:05:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `slug`, `created_at`, `updated_at`) VALUES
(99, 'administrador', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `id_rol`, `email`, `password`) VALUES
(1, 'admin', 99, 'admin@admin.com', '$2y$10$09wxx9k.h4TFS7FLc95jR.7E7E1dJv0ci4rmcXbLw3J3nNe7IpU8C'),
(2, 'admin', 99, 'eloso@admin.com', '$2y$10$BWypTNh4.5zlrBssz2118Ok/hbhXx6EbsBt9nBFSmd0ldFbtIQnci');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categorias_nombre_unique` (`nombre`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_id_categoria_foreign` (`id_categoria`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_id_rol_foreign` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_id_categoria_foreign` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
