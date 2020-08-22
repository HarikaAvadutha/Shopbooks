import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { header } from './header/header.js';
// import { generateCard } from './card/card.js';
import template from './template/template.html';
import { showContent } from './template/template';
import { displayFooter } from './footer/footer';

let books_data = {
  books: [
    {
      id: 'VPJ7jqVSl34C',
      name: 'Early Novels in India',
      authors: ['Meenakshi Mukherjee'],
      publisher: 'Sahitya Akademi',
      publishedDate: '2002',
      price: 200.0,
      quantity: 5,
      pageCount: 278,
      description:
        'This Volume Brings Together Fourteen Essays Written By Literary Critics, Historians And Political Theorists Which Look At The Early Novels In Different Indian Languages And The Circumstances Of Their Production. Most Of The Essays Challenge The Old Assumption That The Novel In India Was A Genre Directly Imported From The West, And Address The Issues Of Plural Heritage And The Economic And Social Determinants That Interacted To Make The Shaping Of This Literary Form A Tangled And Complex Process In Our Languages.',
      img:
        'http://books.google.com/books/content?id=VPJ7jqVSl34C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'Kw4sGGS0wQcC',
      name: 'Novelists and Novels',
      authors: ['Harold Bloom'],
      publisher: 'Infobase Publishing',
      publishedDate: '2009-01-01',
      price: 350.0,
      quantity: 10,
      pageCount: 609,
      description:
        "Read what Bloom had to say on the world's great novelists including Miguel de Cervantes, Charles Dickens, Jane Austen, Franz Kafka, Ernest Hemmingway and more.",
      img:
        'http://books.google.com/books/content?id=Kw4sGGS0wQcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'oLfYZCgTyiQC',
      name: 'Novels, Readers, and Reviewers',
      subtitle: 'Responses to Fiction in Antebellum America',
      authors: ['Nina Baym'],
      publisher: 'Cornell University Press',
      publishedDate: '1987',
      price: 150.0,
      quantity: 4,
      pageCount: 287,
      description:
        'This book describes and characterizes responses of American readers to fiction in the generation before the Civil War. It is based on close examination of the reviews of all novels--both American and European--that appeared in major American periodicals during the years 1840-1860, a period in which magazines, novels, and novel reviews all proliferated. Nina Baym makes uses of the reviews to gain information about the formal, aesthetic, and moral expectations of reviewers. Her major conclusion is that the accepted view about the American novel before the Civil War--the view that the atmosphere in America was hostile to fiction--is a myth. There is compelling evidence, she shows, for the existence of a veritable novel industry and, concomitantly, a vast audience for fiction in the 1840s and 1850s.',
      img:
        'http://books.google.com/books/content?id=oLfYZCgTyiQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'yokG1TkADYoC',
      name: "Woman's Fiction",
      authors: [
        'Nina Baym',
        'Professor of English and Jubilee Professor of Liberal Arts and Sciences Nina Baym',
      ],
      publisher: 'University of Illinois Press',
      publishedDate: '1993',
      price: 250.0,
      quantity: 4,
      pageCount: 327,
      description: 'A Guide to Novels by and about Women in America, 1820-70',
      img:
        'http://books.google.com/books/content?id=yokG1TkADYoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'x6XKBwAAQBAJ',
      name: 'A History of the Spanish Novel',
      authors: ['J. A. Garrido Ardila'],
      publisher: 'Oxford University Press, USA',
      publishedDate: '2015',
      price: 150.0,
      quantity: 4,
      pageCount: 400,
      description:
        "\"The origins of the Spanish novel date back to the early picaresque novels and Don Quixote, in the sixteenth and seventeenth centuries, and the history of the genre in Spain presents the reader with such iconic works as Galdaos's Fortunata and Jacinta, Clarain's La Regenta, or Unamuno's Mist. A History of the Spanish Novel traces the developments of Spanish prose fiction in order to offer a comprehensive and detailed account of this important literary tradition. It opens with an introductory chapter that examines the evolution of the novel in Spain, with particular attention to the rise and emergence of the novel as a genre, during the sixteenth and seventeenth centuries, and the bearing of Golden-Age fiction in later novelists of all periods. The introduction contextualizes the Spanish novel in the circumstances and milestones of Spain's history, and in the wider setting of European literature. The volume is comprised of chapters presented diachronically, from the sixteenth to the twenty-first century and others concerned with specific traditions (the chivalric romance, the picaresque, the modernist novel, the avant-gardist novel) and with some of the most salient authors (Cervantes, Zayas, Pardo Bazaan Galdaos, and Baroja). A History of the Spanish Novel takes the reader across the centuries to reveal the captivating life of the Spanish novel tradition, in all its splendour, and its phenomenal contribution to Western literature\"--Back cover of book jacket.",
      img:
        'http://books.google.com/books/content?id=x6XKBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'WJZ87nNSBiYC',
      name: 'Good Novels, Better Management',
      authors: ['Barbara Czarniawska-Joerges', 'Pierre Guillet de Monthoux'],
      publisher: 'Psychology Press',
      publishedDate: '1994',
      price: 450.0,
      quantity: 7,
      pageCount: 330,
      description:
        'This collection of essays demonstrates how novels are not only comparable, but often superior to the case histories used in business education. As many novelists have had personal experience of working in organizations, their work combines introspective insight with analytical skill.',
      img:
        'http://books.google.com/books/content?id=WJZ87nNSBiYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'v6mKNpODG2EC',
      name: 'The Novels of Anita Desai',
      authors: ['Manmohan Krishna Bhatnagar', 'Mittapalli Rajeshwar'],
      publisher: 'Atlantic Publishers & Dist',
      publishedDate: '2000',
      price: 370.0,
      quantity: 5,
      pageCount: 280,
      description:
        'Anita Desai S Work Represents A Unique Blending Of The Indian And The Western. Her Novels Catch The Bewilderment Of The Individual Psyche Confronted With The Overbearing Socio-Cultural Environment And The Ever-Beckoning Modern Promise Of Self-Gratification And Self-Fulfilment. In The Face Of This Dual Onslaught, Her Protagonists, Male Or Female Maya, Sita, Monisha And Amla; Sarah, Nanda And Raka; Bim And Tara; Devan, Baumgartner Are Seen Poised Rentalizingly At Different Junctures Of The Philosophic Spectrum.Applying Sociological, Psychoanalytic, Structural And Other Approaches Of Formal Textual Analysis, The Essays In The Present Anthology Take A Fresh Look At Established Works, Revealing Aspects Of Study Hitherto Unexplored, Offer Critically Insightful Probes Into Individual Novels And Explore The Deployment Of Images, Symbols And Other Poetic Devices, Besides Diverse Narrative Strategies.An Indispensable Source-Book For Students, Researchers And Teachers Of Indian English And Commonwealth Literature In General And Fiction And Anita Desai In Particular.An Insightful Companion For Research In Sociology And Women-Studies.',
      img:
        'http://books.google.com/books/content?id=v6mKNpODG2EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'LNpsZ06FW0YC',
      name: 'The English Novel in History, 1700-1780',
      authors: ['John J. Richetti'],
      publisher: 'Psychology Press',
      publishedDate: '1999',
      price: 150.0,
      quantity: 20,
      pageCount: 290,
      description:
        'This volume in the series covers the English novel from 1700 to 1780 and provides students with specific contexts for the early novel in response to a new understanding of 18th century Britain.',
      img:
        'http://books.google.com/books/content?id=LNpsZ06FW0YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: '7m1M6jPIFPwC',
      name: 'African Novels in the Classroom',
      authors: ['Margaret Jean Hay'],
      publisher: 'Lynne Rienner Publishers',
      publishedDate: '2000',
      price: 240.0,
      quantity: 10,
      pageCount: 314,
      description:
        'Many teachers of African studies have found novels to be effective assignments in courses. In this guide, teachers describe their favourite African novels - drawn from all over the continent - and share their experiences of using them in the classroom.',
      img:
        'http://books.google.com/books/content?id=7m1M6jPIFPwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    {
      id: 'cAHCSGMl9gwC',
      name: 'Black British Literature',
      authors: ['Mark Stein'],
      publisher: 'Ohio State University Press',
      publishedDate: '2004',
      price: 150.0,
      quantity: 4,
      pageCount: 243,
      description:
        'In this fascinating book, Mark Stein examines black British literature, centering on a body of work created by British-based writers with African, South Asian, or Caribbean cultural backgrounds. Linking black British literature to the bildungsroman genre, this study examines the transformative potential inscribed in and induced by a heterogeneous body of texts. Capitalizing on their plural cultural attachments, these texts portray and purvey the transformation of post-imperial Britain. Stein locates his wide-ranging analysis in both a historical and a literary context. He argues that a cross-cultural and interdisciplinary approach is essential to understanding post-colonial culture and society. The book relates black British literature to ongoing debates about cultural diversity, and thereby offers a way of reading a highly popular but as yet relatively uncharted field of cultural production. With the collapse of its empire, with large-scale immigration from former colonies, and with ever-increasing cultural diversity, Britain underwent a fundamental makeover in the second half of the twentieth century. This volume cogently argues that black British literature is not only a commentator on and a reflector of this makeover, but that it is simultaneously an agent that is integral to the processes of cultural and social change. Conceptualizing the novel of transformation, this comprehensive study of British black literature provides a compelling analytic framework for charting these processes.',
      img:
        'http://books.google.com/books/content?id=cAHCSGMl9gwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  ],
};

let getData = async function () {
  let books = [];
  await fetch(
    'https://my-json-server.typicode.com/HarikaAvadutha/JsonBooksData/db'
  )
    .then((response) => response.json())
    .then((data) => {
      books = data;
      console.log(books);
    });
  return books;
};

(function init() {
  document.body.innerHTML = template;
  header();

  // let books = getData();
  showContent(books_data.books);
  displayFooter();
})();

// function showContent(books) {
//   books.forEach((element) => {
//     generateCard(element);
//   });
// }
