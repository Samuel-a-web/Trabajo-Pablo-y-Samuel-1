export interface CrewMember {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly emoji: string;
}

export interface ScheduleItem {
  readonly day: string;
  readonly hours: string;
}

