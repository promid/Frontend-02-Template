import { createElement } from "./framework.js"
import { Carousel } from "./Carousel.js"
import { Button } from "./Button.js"
import { List } from "./List.js"

let d = [
    {
        img: 'https://hellorfimg.zcool.cn/preview260/201364079.jpg',
        url: 'https://time.geekbang.org',
        title:"image1",
    },
    {
        img: 'https://hellorfimg.zcool.cn/preview260/1054385372.jpg',
        url: 'https://time.geekbang.org',
        title:"image2",
    },
    {
        img: 'https://hellorfimg.zcool.cn/preview260/307847267.jpg',
        url: 'https://time.geekbang.org',
        title:"image3",
    },
    {
        img: 'https://hellorfimg.zcool.cn/preview260/665332564.jpg',
        url: 'https://time.geekbang.org',
        title:"image4",
    }
]

let a = <Button>content</Button>
a.mountTo(document.body);

let b = <List data={d}>
    {(record) =>
        <div>
            <img src={record.img} />
            <a href={record.url}>{record.title}</a>
        </div>
    }
</List>
b.mountTo(document.body);