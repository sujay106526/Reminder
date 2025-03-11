export interface Reminder {
    id: string;
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