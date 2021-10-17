import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  uid!: string;

  @Column({ nullable: false })
  text!: string;

  @Column({ nullable: false })
  isDone!: boolean;
}
