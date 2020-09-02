from django.conf import settings
from django.utils import timezone

# https://stackoverflow.com/questions/6407362/how-can-i-check-if-a-date-is-the-same-day-as-datetime-today
def is_same_day(datetime1, datetime2):
    return datetime1.date() == datetime2.date()


def diff_in_second(source_datetime, dest_datetime):
    return (source_datetime - dest_datetime).total_seconds()


def diff_in_day(source_datetime, dest_datetime):
    return (source_datetime - dest_datetime).days


def is_today(src_datetime):
    return diff_in_day(timezone.now(), src_datetime) == 0


def get_date(src_datetime):
    return src_datetime.replace(hour=0, minute=0, second=0, microsecond=0)