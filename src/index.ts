import { ReminderDatabase } from "./reminder";

const reminderDB = new ReminderDatabase();

// Creating a reminder
reminderDB.createReminder("1", "Doctor Appointment", new Date("2025-03-15"), "Visit Dr. Smith at 10 AM");

// Fetching all reminders
console.log(reminderDB.getAllReminders());

// Checking if a reminder exists
console.log(reminderDB.exists("1"));

// Fetching a specific reminder
console.log(reminderDB.getReminder("1"));

// Updating a reminder
reminderDB.updateReminder("1", "Dentist Appointment", new Date("2025-03-16"), "Visit Dr. John at 11 AM");

// Deleting a reminder
reminderDB.removeReminder("1");