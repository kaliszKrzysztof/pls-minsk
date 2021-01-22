import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Team } from './Team';
import { Match } from './Match';

@Entity()
export class MatchToTeam extends BaseEntity {
  @PrimaryColumn()
  teamId!: number;

  @PrimaryColumn()
  matchId!: number;

  @ManyToOne(() => Team, (team) => team.matchToTeams, { primary: true })
  @JoinColumn({ name: 'teamId' })
  team!: Team;

  @ManyToOne(() => Match, (match) => match.matchToTeams, { primary: true })
  @JoinColumn({ name: 'matchId' })
  match!: Match;

  @Column({ default: false })
  host!: boolean;
}
