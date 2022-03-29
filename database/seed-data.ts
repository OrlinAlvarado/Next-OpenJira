interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Aute do deserunt duis reprehenderit occaecat velit do exercitation exercitation nisi.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En-Progreso Incididunt sint nisi minim deserunt ea anim nostrud aliqua tempor aliquip aliquip velit laborum ullamco.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminadas: Commodo in eu minim minim excepteur tempor excepteur occaecat do ipsum deserunt incididunt fugiat incididunt.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
