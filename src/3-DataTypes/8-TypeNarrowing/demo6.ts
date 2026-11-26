
function printTags(tags: String | string[]) {
    if (Array.isArray(tags)) {
        tags.forEach(tag => console.log(tag.toUpperCase()))
    }
    else {
        console.log(tags.toUpperCase());

    }
}


printTags('sanity')
printTags(['smoke', 'Sanity', 'Retest'])


