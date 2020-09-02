  
from __future__ import unicode_literals

import os
from uuid import uuid4
from django.utils import timezone

from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.validators import validate_email
