from pytz import timezone 
from datetime import datetime

def GetDateTime(required_timezone):
    current_datetime = datetime.now(timezone(required_timezone)).strftime('%Y-%m-%d %H:%M:%S.%f')
    return current_datetime