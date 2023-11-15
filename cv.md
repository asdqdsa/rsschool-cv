# Nikita Melnikov

### Contact info

- Email address: melnikovnikita122@yandex.ru
- Discord server: Nikita(@asdqdsa)

### About

![Profile picture](./pfp.jpeg)

Having worked in a software company as a QA engineer has taught me how much I actually didn't know about software engineering and how much I liked working with a group of people building something from scratch and contributing to a common cause.

My current goal is to walk the path of a student that wants to become a web developer, so that I could apply my skills and, if lucky, get internship.

I consider myself an open-minded individual that devotes his life to what he trully enjoys. Always intrested in new things. As a hobby I, recently, have picked up Chinese as a third language, and, also, have developed a soft spot for picoCTF.

# Skills

- Git
- HTML, CSS
- JS
- Linux
- NVIM, VSCode

## Code Examples

### Codewars - [Maximum subarray sum](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c)

_Description: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers_

```
const maxSequence = function(arr){
  let [summ, acc] = [0, 0];
  for (let val of arr) {
    acc += val;
		if (acc < 0) acc = 0;
    else if (summ < acc) summ = acc;
  }
  return summ;
}
```

## Personal Project

### Youtube Playback Speed Extension for Firefox

- [github](https://github.com/asdqdsa/yt_playback_ff)
- [AMO](https://addons.mozilla.org/en-US/firefox/addon/video-playback-speed-extension/)

## Work Experience

Have experience in quality assurance for a media platform with administrative purposes of video and photo content. Was made for one of the biggest news agencies in Russia.

## Education

Bachelor degree in Bussiness and Computer Science

## English Language

No formal certificates. Consider myself something in between a modest and an advanced english speaker, as in B2 level to C1 level with respect to IELTS bands.
