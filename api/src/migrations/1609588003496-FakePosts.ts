/* eslint-disable */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakePosts1609588003496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
insert into post (text, title, "creatorId", "createdAt") values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'Down to the Cellar (Do pivnice)', 1, '2020-11-11T18:45:08Z');
insert into post (text, title, "creatorId", "createdAt") values ('Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Growing Pains', 1, '2020-07-27T09:52:07Z');
insert into post (text, title, "creatorId", "createdAt") values ('Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Revenge of the Nerds IV: Nerds in Love', 1, '2020-12-20T13:48:23Z');
insert into post (text, title, "creatorId", "createdAt") values ('Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'Bag of Hammers, A', 1, '2020-02-01T07:40:31Z');
insert into post (text, title, "creatorId", "createdAt") values ('Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Streets of Blood', 1, '2020-03-24T23:52:25Z');
insert into post (text, title, "creatorId", "createdAt") values ('Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Stepford Wives, The', 1, '2020-01-15T09:01:51Z');
insert into post (text, title, "creatorId", "createdAt") values ('Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'This Property is Condemned', 1, '2020-07-28T21:57:48Z');
insert into post (text, title, "creatorId", "createdAt") values ('Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Killer Elite', 1, '2020-04-27T02:37:13Z');
insert into post (text, title, "creatorId", "createdAt") values ('Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Kill Bill: Vol. 1', 1, '2020-01-08T22:34:57Z');
insert into post (text, title, "creatorId", "createdAt") values ('Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'One Trick Pony', 1, '2020-01-06T12:47:12Z');
insert into post (text, title, "creatorId", "createdAt") values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Takeshis''', 1, '2020-09-09T04:55:35Z');
insert into post (text, title, "creatorId", "createdAt") values ('Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Tarzan Finds a Son!', 1, '2020-04-18T22:46:55Z');
insert into post (text, title, "creatorId", "createdAt") values ('Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'I Love You, I Love You (Je t''aime je t''aime)', 1, '2020-09-02T15:14:34Z');
insert into post (text, title, "creatorId", "createdAt") values ('Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Diary of a Cannibal', 1, '2020-01-15T23:59:15Z');
insert into post (text, title, "creatorId", "createdAt") values ('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Candyman 3: Day of the Dead', 1, '2020-06-06T08:41:49Z');
insert into post (text, title, "creatorId", "createdAt") values ('Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Tekken', 1, '2020-05-25T17:30:27Z');
insert into post (text, title, "creatorId", "createdAt") values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Who''s Harry Crumb?', 1, '2020-08-26T04:22:28Z');
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
