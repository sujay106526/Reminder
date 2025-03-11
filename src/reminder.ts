export interface Reminder {
    id: string;export interface Reminder {
  id: string;
  title: string;
  description?: string;
  date: Date;
  completed: boolean;
}

export class ReminderDatabase {
  private reminders: Map<string, Reminder>;

  constructor() {
    this.reminders = new Map();
  }

  createReminder(id: string, title: string, date: Date, description?: string): void {
    if (this.reminders.has(id)) {
      throw new Error("Reminder with this ID already exists.");
    }
    this.reminders.set(id, { id, title, description, date, completed: false });
  }

  exists(id: string): boolean {
    return this.reminders.has(id);
  }

  markReminderAsCompleted(id: string): boolean {
    if (!this.reminders.has(id)) {
      return false;
    }
    const reminder = this.reminders.get(id)!;
    reminder.completed = true;
    return true;
  }

  unmarkReminderAsCompleted(id: string): boolean {
    if (!this.reminders.has(id)) {
      return false;
    }
    const reminder = this.reminders.get(id)!;
    reminder.completed = false;
    return true;
  }

  getAllReminders(): Reminder[] {
    return Array.from(this.reminders.values());
  }

  getReminder(id: string): Reminder | null {
    return this.reminders.get(id) || null;
  }

  getAllRemindersMarkedAsCompleted(): Reminder[] {
    return Array.from(this.reminders.values()).filter(reminder => reminder.completed);
  }

  getAllRemindersNotMarkedAsCompleted(): Reminder[] {
    return Array.from(this.reminders.values()).filter(reminder => !reminder.completed);
  }

  getAllRemindersDueByToday(): Reminder[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Array.from(this.reminders.values()).filter(reminder => reminder.date <= today);
  }

  updateReminder(id: string, title?: string, date?: Date, description?: string): boolean {
    if (!this.reminders.has(id)) {
      return false;
    }
    const existingReminder = this.reminders.get(id)!;
    this.reminders.set(id, {
      ...existingReminder,
      title: title ?? existingReminder.title,
      date: date ?? existingReminder.date,
      description: description ?? existingReminder.description,
    });
    return true;
  }

  removeReminder(id: string): boolean {
    return this.reminders.delete(id);
  }
}
    title: string;
    description?: string;
    date: Date;
  }
  
  export class ReminderDatabase {
    private reminders: Map<string, Reminder>;
  
    constructor() {
      this.reminders = new Map();
    }
  
    createReminder(id: string, title: string, date: Date, description?: string): void {
      if (this.reminders.has(id)) {
        throw new Error("Reminder with this ID already exists.");
      }
      this.reminders.set(id, { id, title, description, date });
    }
  
    exists(id: string): boolean {
      return this.reminders.has(id);
    }
  
    getAllReminders(): Reminder[] {
      return Array.from(this.reminders.values());
    }
  
    getReminder(id: string): Reminder | null {
      return this.reminders.get(id) || null;
    }
  
    removeReminder(id: string): boolean {
      return this.reminders.delete(id);
    }
  
    updateReminder(id: string, title?: string, date?: Date, description?: string): boolean {
      if (!this.reminders.has(id)) {
        return false;
      }
      const existingReminder = this.reminders.get(id)!;
      this.reminders.set(id, {
        ...existingReminder,
        title: title ?? existingReminder.title,
        date: date ?? existingReminder.date,
        description: description ?? existingReminder.description,
      });
      return true;
    }
  }
