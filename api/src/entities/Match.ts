import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MatchToTeam } from './MatchToTeam';

@ObjectType()
@Entity()
export class Match extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MatchToTeam, (matchToTeam) => matchToTeam.match)
  matchToTeams!: MatchToTeam[];
}
