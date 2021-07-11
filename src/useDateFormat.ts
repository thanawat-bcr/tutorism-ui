export default function (NOW: Date = new Date()) {
  const _formatNumber = (number: number) => (number < 10 ? `0${number}` : `${number}`);

  const _monthThaiFull = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  const _monthThaiShort = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  const _monthEngFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const _monthEngShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const _dayThaiFull = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'];
  const _dayThaiShort = ['อ.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
  const _dayEngFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const _dayEngShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const date = {
    date: NOW.getDate(),
    day: NOW.getDay(),
    month: NOW.getMonth() + 1,
    fullYear: NOW.getFullYear(),
    fullYearTH: NOW.getFullYear() + 543,
    hour: NOW.getHours(),
    minute: NOW.getMinutes(),
    second: NOW.getSeconds(),
    timezone: NOW.getTimezoneOffset(),
  };

  const _date = {
    date: _formatNumber(NOW.getDate()),
    day: NOW.getDay().toString(),
    month: _formatNumber(NOW.getMonth() + 1),
    fullYear: NOW.getFullYear().toString(),
    fullYearTH: (NOW.getFullYear() + 543).toString(),
    hour: _formatNumber(NOW.getHours()),
    minute: _formatNumber(NOW.getMinutes()),
    second: _formatNumber(NOW.getSeconds()),
    timezone: NOW.getTimezoneOffset().toString(),
  };

  const dateFormat = () => `${_date.fullYear}-${_date.month}-${_date.date}`;
  const dateTimeFormat = () => `${_date.fullYear}-${_date.month}-${_date.date} ${_date.hour}:${_date.minute}:${_date.second}`;

  const _getFullThaiDay = () => `${_dayThaiFull[date.day]}`;
  const _getFullEngDay = () => `${_dayEngFull[date.day]}`;
  const _getShortThaiDay = () => `${_dayThaiShort[date.day]}`;
  const _getShortEngDay = () => `${_dayEngShort[date.day]}`;

  const _getFullThaiMonth = () => `${_monthThaiFull[date.month - 1]}`;
  const _getFullEngMonth = () => `${_monthEngFull[date.month - 1]}`;
  const _getShortThaiMonth = () => `${_monthThaiShort[date.month - 1]}`;
  const _getShortEngMonth = () => `${_monthEngShort[date.month - 1]}`;

  const dateFullThaiDisplay = () => `วัน${_getFullThaiDay()}ที่ ${_date.date} ${_getFullThaiMonth()} พ.ศ. ${_date.fullYearTH}`;
  const dateShortThaiDisplay = () => `${_date.date} ${_getShortThaiMonth()} ${_date.fullYearTH}`;
  const dateFullEngDisplay = () => `${_getFullEngDay()}, ${_getFullEngMonth()} ${_date.date}, ${_date.fullYear}`;
  const dateShortEngDisplay = () => `${_getShortEngMonth()} ${_date.date}, ${_date.fullYear}`;

  const timeFormat = () => `${_date.hour}:${_date.minute}:${_date.second}`;
  const timeFormatAMPM = () => {
    const _modifier = date.hour >= 12 ? 'PM' : 'AM';
    let _hour = date.hour;
    if (date.hour === 0) _hour = 12;
    if (date.hour > 12) _hour -= 12;
    return `${_formatNumber(_hour)}:${_date.minute} ${_modifier}`;
  };

  return {
    _date,
    dateFormat,
    dateTimeFormat,

    _getFullThaiDay,
    _getFullEngDay,
    _getShortThaiDay,
    _getShortEngDay,
    _getFullThaiMonth,
    _getFullEngMonth,
    _getShortThaiMonth,
    _getShortEngMonth,

    dateFullThaiDisplay,
    dateShortThaiDisplay,
    dateFullEngDisplay,
    dateShortEngDisplay,

    timeFormat,
    timeFormatAMPM,
  };
}
