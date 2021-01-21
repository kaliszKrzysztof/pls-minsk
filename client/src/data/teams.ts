import slugify from 'slugify';
import sortBy from 'lodash/sortBy';
import { Team } from 'types';

interface CrateTeamParams {
  name: string;
  description?: string;
  image?: string;
  address: string;
  phone: { name: string; number: string }[];
}

const testPhone = [{ name: 'Michał', number: '606 950 979' }];
const testAddress = '05-300 Mińsk Mazowiecki, ul. Siennicka 30';

export const createTeam = ({ name, description, image, address, phone }: CrateTeamParams): Team => ({
  id: slugify(name, {
    lower: true,
  }),
  name,
  description: description || '',
  image: image || '',
  address,
  phone,
});

export const kaluszyn = createTeam({ name: 'KS KAŁUSZYN', phone: testPhone, address: testAddress });
export const pvu = createTeam({
  name: 'PVU Mińsk Mazowiecki',
  phone: testPhone,
  address: testAddress,
});
export const halinow = createTeam({
  name: 'KS Halinów',
  phone: testPhone,
  address: testAddress,
});
export const fabos = createTeam({
  name: 'Fabos Mińsk Mazowiecki',
  phone: testPhone,
  address: testAddress,
});
export const ekonom = createTeam({
  name: 'Ekonom Volleyball Team',
  phone: testPhone,
  address: testAddress,
});
export const brzoze = createTeam({
  name: 'Burza Brzóze',
  phone: testPhone,
  address: testAddress,
});
export const blackteam = createTeam({
  name: 'BlackTeam Mińsk Mazowiecki',
  phone: testPhone,
  address: testAddress,
});
export const watra = createTeam({
  name: 'Watra Mrozy',
  phone: testPhone,
  address: testAddress,
});
export const ceglow = createTeam({
  name: 'Jutrzenka Cegłów',
  phone: testPhone,
  address: testAddress,
});
export const fenix = createTeam({
  name: 'Fenix Siennica',
  phone: testPhone,
  address: testAddress,
});
export const afm = createTeam({
  name: 'AFM Team',
  phone: testPhone,
  address: testAddress,
});
export const goldenBoys = createTeam({ name: 'Golden Boys', phone: testPhone, address: testAddress });

const teams: Team[] = sortBy(
  [kaluszyn, pvu, halinow, ekonom, brzoze, blackteam, watra, ceglow, fenix, afm, goldenBoys, fabos],
  ['name'],
);

export default teams;
