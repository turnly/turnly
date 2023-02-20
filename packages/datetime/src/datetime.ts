/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  DateObjectUnits,
  DateTime as Time,
  DateTimeFormatOptions,
  DateTimeUnit,
  DiffOptions,
  DurationLike,
  DurationUnits,
  LocaleOptions,
  ToRelativeOptions,
} from 'luxon'

/**
 * DateTime
 *
 * @description Provides the most comprehensive, yet simple and consistent tool-set for manipulating dates.
 */
export class DateTime {
  private readonly today = Time.now()

  private constructor(
    private time: Time,
    private readonly isImmutable = false
  ) {}

  private mutable(time: Time) {
    if (this.isImmutable) return new DateTime(time, this.isImmutable)

    this.time = time

    return this
  }

  /**
   * Add
   *
   * @description Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
   * @param duration The duration to add
   */
  public add(duration: DurationLike) {
    return this.mutable(this.time.plus(duration))
  }

  /**
   * Add days to the date
   *
   * @description Add days to the date and return a new Date object
   * @param days Number of days to add to the date
   */
  public addDays(days: number) {
    return this.mutable(this.time.plus({ days }))
  }

  /**
   * Add months to the date
   *
   * @description Add months to the date and return a new Date object
   * @param months Number of months to add to the date
   */
  public addMonths(months: number) {
    return this.mutable(this.time.plus({ months }))
  }

  /**
   * Add years to the date
   *
   * @description Add years to the date and return a new Date object
   * @param years Number of years to add to the date
   */
  public addYears(years: number) {
    return this.mutable(this.time.plus({ years }))
  }

  /**
   * Add hours to the date
   *
   * @description Add hours to the date and return a new Date object
   * @param hours Number of hours to add to the date
   */
  public addHours(hours: number) {
    return this.mutable(this.time.plus({ hours }))
  }

  /**
   * Add minutes to the date
   *
   * @description Add minutes to the date and return a new Date object
   * @param minutes Number of minutes to add to the date
   */
  public addMinutes(minutes: number) {
    return this.mutable(this.time.plus({ minutes }))
  }

  /**
   * Add seconds to the date
   *
   * @description Add seconds to the date and return a new Date object
   * @param seconds Number of seconds to add to the date
   */
  public addSeconds(seconds: number) {
    return this.mutable(this.time.plus({ seconds }))
  }

  /**
   * Subtract days
   *
   * @description Subtract the specified number of days from the given date.
   * @param days Number of days to subtract
   */
  public minusDays(days: number) {
    return this.mutable(this.time.minus({ days }))
  }

  /**
   * Subtract months
   *
   * @description Subtract the specified number of months from the given date.
   * @param months Number of months to subtract
   */
  public minusMonths(months: number) {
    return this.mutable(this.time.minus({ months }))
  }

  /**
   * Subtract years
   *
   * @description Subtract the specified number of years from the given date.
   * @param years Number of years to subtract
   */
  public minusYears(years: number) {
    return this.mutable(this.time.minus({ years }))
  }

  /**
   * Subtract hours
   *
   * @description Subtract the specified number of hours from the given date.
   * @param hours Number of hours to subtract
   */
  public minusHours(hours: number) {
    return this.mutable(this.time.minus({ hours }))
  }

  /**
   * Subtract minutes
   *
   * @description Subtract the specified number of minutes from the given date.
   * @param minutes Number of minutes to subtract
   */
  public minusMinutes(minutes: number) {
    return this.mutable(this.time.minus({ minutes }))
  }

  /**
   * Subtract seconds
   *
   * @description Subtract the specified number of seconds from the given date.
   * @param seconds Number of seconds to subtract
   */
  public minusSeconds(seconds: number) {
    return this.mutable(this.time.minus({ seconds }))
  }

  public startOfDay() {
    return this.mutable(
      this.time
        .startOf('day')
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    )
  }

  public endOfDay() {
    return this.mutable(
      this.time.endOf('day').set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 999,
      })
    )
  }

  /**
   * Get date
   *
   * @description Get the date of Time instance.
   */
  public toJSDate() {
    return this.time.toJSDate()
  }

  /**
   * ISO 8601
   *
   * @description Returns an ISO 8601-compliant string representation of this DateTime
   */
  public toISO() {
    return this.time.toISO()
  }

  /**
   * To Local Date
   *
   * @description "Set" the Time's zone to the host's local zone. Returns a newly-constructed Time.
   */
  public toLocal() {
    return this.mutable(this.time.toLocal())
  }

  /**
   * To UTC
   *
   * @description Convert the date to UTC.
   */
  public toUTC() {
    return this.mutable(this.time.toUTC())
  }

  public toFormat(fmt: string, opts?: LocaleOptions) {
    return this.time.toFormat(fmt, opts)
  }

  public toLocaleString(
    formatOpts?: DateTimeFormatOptions,
    opts?: LocaleOptions
  ) {
    return this.time.toLocaleString(formatOpts, opts)
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   */
  toRelative(options?: ToRelativeOptions) {
    return this.time.toRelative(options)
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   */
  public toMillis() {
    return this.time.toMillis()
  }

  public setZone(zone: string) {
    return this.mutable(this.time.setZone(zone))
  }

  public setLocale(locale: string) {
    return this.mutable(this.time.setLocale(locale))
  }

  /**
   * Is equal to
   *
   * @description Are the given dates equal?
   * @param date Date to compare to
   */
  public isEqual(date: Date) {
    return this.toMillis() === date.getTime()
  }

  /**
   * Is today
   *
   * @description Returns true if the date is today
   */
  public isToday() {
    return (
      this.time.startOf('day').toMillis() ===
      this.today.startOf('day').toMillis()
    )
  }

  /**
   * Is After
   *
   * @description Returns true if the date is after the given date
   * @param date Date to compare to
   */
  public isAfter(date: Date) {
    return this.time.toMillis() > Time.fromJSDate(date).toMillis()
  }

  /**
   * Is Before
   *
   * @description Returns true if the date is before the given date
   * @param date Date to compare to
   */
  public isBefore(date: Date) {
    return this.time.toMillis() < Time.fromJSDate(date).toMillis()
  }

  /**
   * Is same
   *
   * @description Are the given dates in the same?
   * @param date Date to compare to
   */
  private isSame(date: Date, unit: DateTimeUnit) {
    return this.time.hasSame(Time.fromJSDate(date), unit)
  }

  /**
   * Is same day
   *
   * @description Are the given dates in the same day (and year and month)?
   * @param date Date to compare to
   */
  public isSameDay(date: Date) {
    return this.isSame(date, 'day')
  }

  /**
   * Is same month
   *
   * @description Are the given dates in the same month (and year)?
   * @param date Date to compare to
   */
  public isSameMonth(date: Date) {
    return this.isSame(date, 'month')
  }

  /**
   * Is same year
   *
   * @description Are the given dates in the same year?
   * @param date Date to compare to
   */
  public isSameYear(date: Date) {
    return this.isSame(date, 'year')
  }

  /**
   * Is same hour
   *
   * @description Are the given dates in the same hour (and same day)?
   * @param date Date to compare to
   */
  public isSameHour(date: Date) {
    return this.isSame(date, 'hour')
  }

  /**
   * Is same minute
   *
   * @description Are the given dates in the same minute (and hour and day)?
   * @param date Date to compare to
   */
  public isSameMinute(date: Date) {
    return this.isSame(date, 'minute')
  }

  /**
   * Is same second
   *
   * @description Are the given dates in the same second (and hour and day)?
   * @param date Date to compare to
   */
  public isSameSecond(date: Date) {
    return this.isSame(date, 'second')
  }

  /**
   * Is future
   *
   * @description Returns true if the date is in the future
   */
  public isFuture() {
    return this.toMillis() > this.today.toMillis()
  }

  /**
   * Is passed
   *
   * @description Returns true if the date is in the past
   */
  public isPast() {
    return this.toMillis() < this.today.toMillis()
  }

  /**
   * Is this year
   *
   * @description Returns true if the date is in the current year
   */
  public isThisYear() {
    return this.time.year === this.today.year
  }

  /**
   * Is this month
   *
   * @description Returns true if the date is in the current month
   */
  public isThisMonth() {
    return this.isThisYear() && this.time.month === this.today.month
  }

  /**
   * Return the difference between two DateTimes as a Duration.
   */
  public diff(date: Date, unit?: DurationUnits, opts?: DiffOptions) {
    return this.time.diff(Time.fromJSDate(date), unit, opts)
  }

  /**
   * Return the difference between this DateTime and right now.
   */
  public diffNow(unit?: DurationUnits, opts?: DiffOptions) {
    return this.time.diffNow(unit, opts)
  }

  public getDay() {
    return this.time.day
  }

  public getMonth() {
    return this.time.month
  }

  public getYear() {
    return this.time.year
  }

  public getHours() {
    return this.time.hour
  }

  public getMinutes() {
    return this.time.minute
  }

  public getSeconds() {
    return this.time.second
  }

  public getMilliseconds() {
    return this.time.millisecond
  }

  public getWeekday() {
    return this.time.weekday
  }

  /**
   * Month name
   *
   * @description Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   */
  public getMonthShort() {
    return this.time.monthShort
  }

  /**
   * Month name
   *
   * @description Get the human readable month name, such as 'October'.
   */
  public getMonthLong() {
    return this.time.monthLong
  }

  /**
   * Day of week
   *
   * @description Get the human readable short weekday, such as 'Mon'.
   */
  public getWeekdayShort() {
    return this.time.weekdayShort
  }

  public getWeekdayLong() {
    return this.time.weekdayLong
  }

  /**
   * Max date
   *
   * @description Return the latest of the given dates.
   * @param dates Array of dates
   */
  public static max(dates: Date[]) {
    return Time.max(...dates.map(date => Time.fromJSDate(date)))
  }

  /**
   * Min date
   *
   * @description Return the earliest of the given dates.
   * @param dates Array of dates
   */
  public static min(dates: Date[]) {
    return Time.min(...dates.map(date => Time.fromJSDate(date)))
  }

  public static fromJSDate(date: Date) {
    return new DateTime(Time.fromJSDate(date))
  }

  public static now() {
    return new DateTime(Time.utc())
  }

  /**
   * Today
   *
   * @description Returns a DateTime object, with today's date and times set to the start of the day.
   *
   * NOTE: This is different than now, times are set to the start of the day, so they should not
   * be used for comparisons or to create or update timestamps that refer to the current time.
   */
  public static today(options?: LocaleOptions) {
    return new DateTime(Time.utc(options)).startOfDay()
  }

  public static fromMillis(millis: number) {
    return new DateTime(Time.fromMillis(millis))
  }

  public static fromISO(iso: string) {
    return new DateTime(Time.fromISO(iso))
  }

  public static fromFormat(date: string, format: string) {
    return new DateTime(Time.fromFormat(date, format))
  }

  public static fromObject(obj: DateObjectUnits) {
    return new DateTime(Time.fromObject(obj))
  }

  public static utc(options?: LocaleOptions) {
    return new DateTime(Time.utc(options))
  }

  public static nowImmutable() {
    return new DateTime(Time.utc(), true)
  }

  public static todayImmutable(options?: LocaleOptions) {
    return new DateTime(Time.utc(options), true).startOfDay()
  }

  public static fromMillisImmutable(millis: number) {
    return new DateTime(Time.fromMillis(millis), true)
  }

  public static fromISOImmutable(iso: string) {
    return new DateTime(Time.fromISO(iso), true)
  }

  public static fromFormatImmutable(date: string, format: string) {
    return new DateTime(Time.fromFormat(date, format), true)
  }

  public static fromObjectImmutable(obj: DateObjectUnits) {
    return new DateTime(Time.fromObject(obj), true)
  }

  public static utcImmutable(options?: LocaleOptions) {
    return new DateTime(Time.utc(options), true)
  }

  public static fromJSDateImmutable(date: Date) {
    return new DateTime(Time.fromJSDate(date), true)
  }
}
