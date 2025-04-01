export interface ScheduleClass {
  time: string;
  name: string;
  instructor: string;
  level: string;
}

export interface DaySchedule {
  name: string;
  classes: ScheduleClass[];
}

export const scheduleData: DaySchedule[] = [
  {
    name: "Понедельник",
    classes: [
      {
        time: "11:00 - 18:00",
        name: "Индивидуальные уроки",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "18:15 - 19:45",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Вторник",
    classes: [
      {
        time: "07:00 - 08:30",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "08:45 - 10:15",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "17:30 - 18:30",
        name: "Здоровая спина",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "18:45 - 19:45",
        name: "Растяжка",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "20:00 - 21:00",
        name: "Восточные танцы",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Среда",
    classes: [
      {
        time: "07:30 - 08:30",
        name: "Пранаяма класс по дыханию",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "09:00 - 18:00",
        name: "Индивидуальные уроки",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "18:15 - 19:45",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Четверг",
    classes: [
      {
        time: "07:00 - 08:30",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "08:45 - 10:15",
        name: "Хатха йога",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "17:30 - 18:30",
        name: "Здоровая спина",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "18:45 - 19:45",
        name: "Растяжка",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "20:00 - 21:00",
        name: "Восточные танцы",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Пятница",
    classes: [
      {
        time: "11:00 - 18:00",
        name: "Индивидуальные уроки",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "18:15 - 19:45",
        name: "Инь йога",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Суббота",
    classes: [
      {
        time: "08:45 - 10:15",
        name: "Инь йога",
        instructor: "Валерия",
        level: "Все уровни"
      },
      {
        time: "10:30 - 18:00",
        name: "Индивидуальные уроки",
        instructor: "Валерия",
        level: "Все уровни"
      }
    ]
  },
  {
    name: "Воскресенье",
    classes: []
  }
];
