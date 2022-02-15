const aboutMe = 'My name is Shama. I come form Chuadanga';

// String Break by letter 
const words = aboutMe.split(' ');
// String break by index number
const smallSlice = aboutMe.slice(3, 17);
// string break by lenght
const anotherPart = aboutMe.substr(11, 6);
// string break by letter number
const otherPart = aboutMe.substring(0, 6);

// String add by concat
const firstName = 'Abu';
const lastname = 'Shama';
const fullName = firstName.concat(lastname);

//Array add join
const about = ['My', 'name', 'is', 'Shama'];
const aboutJoined = about.join(' ')


console.log(aboutJoined);