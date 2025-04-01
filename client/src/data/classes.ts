export interface YogaClass {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

export const yogaClasses: YogaClass[] = [
  {
    title: "Хатха йога",
    description: "Классическая форма йоги, фокусирующаяся на основных позах, дыхании и медитации. Идеально подходит для начинающих.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    level: "Для всех уровней",
    duration: "60-90 мин"
  },
  {
    title: "Виньяса флоу",
    description: "Динамичная практика, где движения синхронизированы с дыханием. Отлично подходит для укрепления тела и повышения гибкости.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    level: "Средний уровень",
    duration: "75 мин"
  },
  {
    title: "Йога-нидра",
    description: "Медитативная практика глубокого расслабления, часто называемая \"йогическим сном\". Помогает снять стресс и улучшить качество сна.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a4bbcdbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    level: "Для всех уровней",
    duration: "60 мин"
  },
  {
    title: "Аштанга йога",
    description: "Интенсивная и структурированная практика, следующая определенной последовательности поз. Развивает силу и выносливость.",
    image: "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    level: "Продвинутый уровень",
    duration: "90 мин"
  },
  {
    title: "Йога для беременных",
    description: "Специально разработанная практика для беременных женщин. Помогает подготовиться к родам и поддерживает хорошее самочувствие.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    level: "Специальный курс",
    duration: "60 мин"
  },
  {
    title: "Восстановительная йога",
    description: "Мягкая практика с использованием опор. Идеально подходит для восстановления после травм или при хронических заболеваниях.",
    image: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&auto=format&fit=crop&w=1588&q=80",
    level: "Для всех уровней",
    duration: "75 мин"
  }
];
