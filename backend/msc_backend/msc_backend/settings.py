import os
import django_heroku

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '50u1$4dlj0h3dxpsq*1xq21(fyq!&#)$k)^r@7427r$x7mf!bx'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
CSRF_COOKIE_SECURE = True

ALLOWED_HOSTS = ['*']
CORS_ALLOWED_ORIGINS = [
	# "https://example.com",
	# "https://sub.example.com",
	# "http://localhost:8080",
	# "http://127.0.0.1:9000"
]
# CORS_ALLOWED_ORIGIN_REGEXES = [
#     r"^https://\w+\.example\.com$",
# ]
CORS_ALLOW_CREDENTIALS = True

# Application definition

INSTALLED_APPS = [
	'corsheaders',
	# Keep corsheader at the top of the list. This is to allow certain IP's to pass CORS Policy and access db
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'rest_framework',
]

MIDDLEWARE = [
	'corsheaders.middleware.CorsMiddleware',
	# Keep corsheader at the top of the list. This is to allow certain IP's to pass CORS Policy and access db
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'msc_backend.urls'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'msc_backend.wsgi.application'

# Activate Django-Heroku.
django_heroku.settings(locals())

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
	}
}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    # 'DATETIME_FORMAT': '%Y-%m-%d %H:%M:%S (%z)',
    'UNAUTHENTICATED_USER': None,
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.IsAuthenticated',
        # 'rest_framework.permissions.IsAuthenticatedOrReadOnly',
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # https://www.django-rest-framework.org/api-guide/authentication/
        # 'rest_framework_simplejwt.authentication.JWTAuthentication',
        # Basic authentication is generally only appropriate for testing.
        # 'rest_framework.authentication.BasicAuthentication',
        # Token authentication is appropriate for client-server setups, such as native desktop and mobile clients.
        # The curl command line tool may be useful for testing token authenticated APIs. For example:
        # curl -X GET http://127.0.0.1:8000/api/example/ -H 'Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'
        # Note: If you use TokenAuthentication in production you must ensure that your API is only available over https.
        'rest_framework.authentication.TokenAuthentication',
        # TODO: make token expire-able
        # 'module-name.authentication.ExpiringTokenAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 100
}

# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Seoul'
USE_I18N = True
USE_L10N = True
USE_TZ = False

APPEND_SLASH=False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/
STATIC_URL = '/static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


RES_CODE_FAIL = 0
RES_CODE_SUCCESS = 1

# TODO fill in msc email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = ''
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 465
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = ''