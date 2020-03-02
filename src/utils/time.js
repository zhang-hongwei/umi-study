import moment from 'moment';
import _ from 'lodash';

export const dateFormat = 'YYYY-MM-DD';

// 格式化时间
export function formatTime(time, format = dateFormat) {
  return moment(time)
    .format(format)
    .toString();
}

// 获取开始时间
export function getStartDate(val, type = 'month', format = 'YYYY-MM-DD') {
  return moment()
    .month(moment().month() - val)
    .startOf(type)
    .format(format)
    .toString();
}

// 获取结束时间
export function getEndDate(val, type = 'month', format = 'YYYY-MM-DD') {
  return moment()
    .month(moment().month() - val)
    .endOf(type)
    .format(format)
    .toString();
}

export function getRangeDate(day, cur = 1) {
  return [
    moment()
      .subtract(day, 'days')
      .startOf('day'),

    moment()
      .subtract(cur, 'days')
      .startOf('day'),
  ];
}

export function getDiffAToB(a, b, type = 'days') {
  a = moment(a);
  b = moment(b);
  const diff = a.diff(b, type);
  return Math.abs(diff);
}

function addZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
export function getTimeDuration(x) {
  const d = moment.duration(x, 'milliseconds');
  const h = Math.floor(d.asHours());
  const m = Math.floor(d.asMinutes()) - h * 60;
  const s = Math.floor(d.asSeconds()) - h * 60 * 60 - m * 60;
  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

export function getTimeofAToB(startDate, endDate, format = 'YYYY-MM-DD', type = 'days') {
  const start_time = moment(startDate);
  const end_time = moment(endDate);
  const diff_times = getDiffAToB(start_time, end_time);
  const times = [];
  _.times(diff_times + 1, i => {
    const new_start_time = moment(start_time); // 每次重新初始化开始时间，因为我碰到了深拷贝的问题
    times.push(new_start_time.add(i, 'days').format(format)); // 数组下标从０开始，可以用它进行每次的天数递增
  });

  return times;
}

export function getWeekDayCount(start, end) {
  const range = moment(end).diff(moment(start));
  const d = moment.duration(range);
  const days = d.asDays() + 1; // 总天数  因为需要包含首尾所以加1
  const weekDuration = Math.floor(d.asWeeks()); // 计算周数
  console.log('weekDuration===>>>>', weekDuration);

  const weekOfday = moment(start).format('E'); // 计算今天是这周第几天
  // var last_monday = moment().subtract(weekOfday-1, 'days').format('YYYY/MM/DD');//周一日期
  // var last_sunday = moment().add(7-weekOfday, 'days').format('YYYY/MM/DD');//周日日期
  console.log('==============>>>周几', weekOfday);

  const weekOfday1 = moment('2019/10/1').format('E');
  const weekOfday2 = moment('2019/10/5').format('E');
  const weekOfday3 = moment('2019/10/8').format('E');
  console.log(weekOfday1, weekOfday2, weekOfday3);
}

// 时间格式转成秒
export const timeToSec = function(time) {
  const timeArr = time.split(':');
  const hour = timeArr[0];
  const minute = timeArr[1];
  const sec = timeArr[2];

  return Number(hour * 3600) + Number(minute * 60) + Number(sec);
};

// 秒转为时间格式
export const secToTime = function(s) {
  const hour = parseInt(s / 3600, 10);
  const minute = parseInt((s - hour * 3600) / 60, 10);
  const sec = s - hour * 3600 - minute * 60;

  const H = hour > 9 ? hour : `0${hour}`;
  const M = minute > 9 ? minute : `0${minute}`;
  const S = sec > 9 ? sec : `0${sec}`;

  return `${H}:${M}:${S}`;
};
