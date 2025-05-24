//TODO Module 2 – Lesson 17.01: Date Methods and the DateTimeFormat API


// This lesson extends what you've already done with:
// - .toLocaleDateString()
// - .toLocaleTimeString()
// - .toISOString()
// …and introduces the Intl.DateTimeFormat API, which gives you precise control over how dates and times are displayed for different languages, regions, and formats.

//* 🧠 What You’ll Learn:
// - Working with built-in date methods
// - Formatting dates/times with full control
// - Using the Intl.DateTimeFormat API to:
//      - Format dates in different locales (e.g., 'fr-FR', 'ar-SA')
//      - Customize date and time output beyond default options

//* ✅ Lesson Structure
// 1. Theoretical Overview of Date Methods
// 2. What Is Intl.DateTimeFormat?
// 3. Practical Examples
// 4. Mini-Challenge: Format a global event date in 3 different locales


//TODO 📘 Module 2 — Lesson 17: Step 1 — Theoretical Overview of Common Date Methods

//* ✅ What Are Date Methods?
// JavaScript’s Date object provides built-in methods to extract and manipulate parts of a date/time.
// We already used some of these in your countdown and formatting challenges — now let’s organize and explore them systematically.

//* 🧠 Core Categories of Date Methods:
//? 🔹 1. Get (Read) Values
// These methods return parts of the date/time.

//? Method                  Description                 Example
//  .getFullYear()          Year (e.g., 2025)           date.getFullYear()
//  .getMonth()             Month (0–11)                date.getMonth() → 0 = Jan
//  .getDate()              Day of the month            date.getDate() → 1–31
//  .getDay()               Weekday (0–6)               date.getDay() → 0 = Sunday
//  .getHours()             Hour (0–23)                 date.getHours()
//  .getMinutes()           Minutes (0–59)              date.getMinutes()
//  .getSeconds()           Seconds (0–59)              date.getSeconds()
//  .getMilliseconds()      Millis (0–999)              date.getMilliseconds()

//? 🔹 2. Set (Modify) Values
//  These methods allow you to change parts of a date.

//? Method                  Sets                        Example
//  .setFullYear(year)      Sets year                   date.setFullYear(2026)
//  .setMonth(index)        Sets month                  date.setMonth(11) → Dec
//  .setDate(day)           Sets day                    date.setDate(15)
//  .setHours(hour)         Sets hour                   date.setHours(10)
//  .setMinutes(min)        Sets minutes                date.setMinutes(45)
//* ✅ When you change one part, the rest of the Date object updates accordingly.

//? 🔹 3. Other Useful Methods

//? Method                  Description
//  .getTime()              Returns the timestamp (milliseconds since Jan 1, 1970)
//  .toISOString()          Returns ISO format string
//  .toString()             Returns full string (date + time + timezone)

//* 🧪 Example:

const date = new Date('2025-12-25T10:30:00');

console.log(date.getFullYear());                        // 2025
console.log(date.getMonth());                           // 11 (December)
console.log(date.getDay());                             // 4 (Thursday)
console.log(date.getHours());                           // 10
console.log(date.toString());                           // Thu Dec 25 2025 10:30:00

//* ✅ Summary:
//? You Want                To	Use
//  Get the year            getFullYear()
//  Change the time         setHours()
//  Find the weekday        getDay()
//  Format for storage      toISOString()


//TODO 📘 Module 2 — Lesson 17: Step 2 — What is Intl.DateTimeFormat?

//* 🌍 What Is Intl.DateTimeFormat?
//  Intl.DateTimeFormat is part of JavaScript’s Internationalization API, which allows you to:
//  - Display dates & times in multiple languages
//  - Adapt output for different regions
//  - Control granular formatting with full precision
//? Think of it as an advanced, customizable version of .toLocaleDateString() and .toLocaleTimeString().

//* 🧠 Why Use Intl.DateTimeFormat?
//? Feature                 Benefit
//  Localization            Auto-formats for any region or language
//  Customization           You pick exactly what gets shown
//  Reuse                   You can format multiple dates with one formatter

//* ✅ Basic Syntax

const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const date2 = new Date();
console.log(formatter.format(date2));                   // Tuesday, April 11, 2025

//! We can reuse the formatter for multiple dates — performance-friendly and reusable.

//* 🔧 Available Options

//? Option                  Values
//  weekday                 'long', 'short', 'narrow'
//  year                    'numeric', '2-digit'
//  month                   'long', 'short', 'numeric', '2-digit'
//  day                     'numeric', '2-digit'
//  hour                    'numeric', '2-digit'
//  minute                  'numeric', '2-digit'
//  second                  'numeric', '2-digit'
//  hour12                  true (AM/PM) or false (24h)

//* 🌐 Examples in Other Locales:

//  1. ==========================
new Intl.DateTimeFormat('fr-FR').format(new Date());    // "11 avril 2025"

const date3 = new Date('2025-04-11');
const formatted = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format(date3);

console.log(formatted);                                 // "vendredi 11 avril 2025"

// 2. ===========================

new Intl.DateTimeFormat('ar-EG').format(new Date());    // "١١‏/٤‏/٢٠٢٥"

// 3. ===========================

new Intl.DateTimeFormat('ja-JP', { dateStyle: 'full' }).format(new Date()); // "2025年4月11日金曜日"

//* 🧠 Real Use Cases:
//  - Localizing a product’s release date
//  - Displaying event time based on the user’s location
//  - Showing culturally familiar date formats for international users


//TODO 📘 Module 2 — Lesson 17: Step 3 — Format the Same Date in 3 Locales

//* 🧠 Task:
//  Format the same specific date (e.g. 2025-11-10) for display in:
//  1. 🇺🇸 'en-US' — U.S. English
//  2. 🇫🇷 'fr-FR' — French
//  3. 🇯🇵 'ja-JP' — Japanese

//? Solution:

const date5 = new Date('2025-11-10');

const us = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(date5);

const fr = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(date5);

const jp = new Intl.DateTimeFormat('ja-JP', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(date5);

console.log(us);                                        // Monday, November 10, 2025
console.log(fr);                                        // lundi 10 novembre 2025
console.log(jp);                                        // 2025年11月10日月曜日


//TODO ✅ We do not need to build a separate structure for each language.
// Instead, we will use tools like:

//? 🔧 Intl.DateTimeFormat
//  - Handles date and time formatting for any locale
//? 🗣️ Intl.NumberFormat
//  - Formats currency, percentages, numbers globally

//! 📚 A good i18n (internationalization) library like:
//  - i18next
//  - vue-i18n
//  - react-intl
//  - formatjs

// These tools automatically manage translations and formatting using locale codes like 'en-US', 'fr-FR', 'de-DE', 'ja-JP', etc.

//* 🔁 Real Programs Use Dynamic Locale Detection

// A real app might detect the user’s browser or system language like this:

const userLocale = navigator.language || 'en-US';

const formatter4 = new Intl.DateTimeFormat(userLocale, {
    dateStyle: 'full',
    timeStyle: 'short',
})

// Then reuse that formatter across the whole app.
//! ✅ No need to write special formatting code for each country.

//* 🧠 What You Do Need:
//? Need                                    Solution
//  Localized labels/text	                Translation files (JSON per language)
//  Localized date/time/number              Use Intl APIs
//  Language switcher in app                Update locale context dynamically


//TODO ✅ Detect and format for the user's local language:

const userLocale11 = navigator.language; // e.g., "es-ES"

const formatter11 = new Intl.DateTimeFormat(userLocale11, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(formatter.format(new Date()));

//! ✅ This means the program automatically adapts to whatever language the user's browser is set to — no hardcoded 'en-US' required.

//* ✅ Summary
//? What You Asked                                      Answer
//  Does 'en-US' limit the app to one language?	        ❌ No — it’s just a locale string
//  How do you include new languages?                   Use a different locale code (like 'fr-FR')
//  Does the API handle formatting per locale?          ✅ Yes — built into all modern browsers

