// Main variables

const chapters = [];

let currentChapterIndex = null;
let currentChapterPageIndex = null;


const nextPageButton = document.querySelector(".js_nextPageButton");
const previousPageButton = document.querySelector(".js_previousPageButton");
const pageTitle = document.querySelector(".js_pageTitle");
const pageCounter = document.querySelector(".js_pageCounter");
const contentArea = document.querySelector(".js_contentArea");

// -----------------------------------------------------

// Adding event listeners

nextPageButton.addEventListener("click", loadNextPage);
previousPageButton.addEventListener("click", loadPreviousPage);

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        loadNextPage();
    } else if (event.key === "ArrowLeft") {
        loadPreviousPage();
    }
});


// -----------------------------------------------------

// Populating Data

function appendChapter(chapterId, title, pages) {

    const obj = {
        id: chapterId,
        title: title,
        pages: []
    }

    pages.forEach(fileName => {
        obj.pages.push({ url: `./research/${fileName}`, type: ".md" })
    })

    chapters.push(obj);
}

appendChapter("c0", "Agenda", ["intro-1.md", "intro-2.md"]);
appendChapter("c1", "Callback", ["chap1-1.md"]);
appendChapter("c2", "Eventos", ["chap2-1.md", "chap2-2.md"]);
appendChapter("c3", "Como usar", ["chap3-1.md", "chap3-2.md", "chap3-3.md", "chap3-4.md"]);
appendChapter("c4", "Objeto Event", ["chap3-5.md"]);
appendChapter("c5", "Propagação de Eventos", ["chap4-1.md"]);
appendChapter("c6", "POC", ["chap5-1.md"]);
appendChapter("c7", "Referências", ["chap6-1.md"]);

// Agenda
// - **Função de callback**
// - **Eventos**
//     - **Uma breve explicação**
//     - **Como usar?**
//         - 3 alternativas
//         - E a vencedora é... `Event Listener`
//         - O objeto `Event`
//     - **Aprofundando**
//         - `Propagação de eventos` e como parar
//         - `Comportamentos padrões` e como impedir (bônus)



// ---------------------------------------------------------


// Load Page

function loadIndex() {
    const indexElement = document.querySelector(".dook__index");
    let chapterItemElement = null;

    chapters.forEach(chapter => {
        chapterItemElement = document.createElement("div");
        chapterItemElement.classList.add("dook__index__item");
        chapterItemElement.id = chapter.id;
        chapterItemElement.innerText = chapter.title;
        chapterItemElement.addEventListener("click", loadChapterFromElement)
        indexElement.appendChild(chapterItemElement);
    })
}

// Load Chapter

function loadChapterFromElement(event) {
    let id = event.target.id;
    let chapterIdx = getChapterIdIndex(id);
    if (chapterIdx + 1) {
        loadChapterPage(chapterIdx, 0);
    }
}

function getChapterIdIndex(chapterId) {
    let answer = false;
    chapters.forEach((chapter, idx) => {
        if (chapterId == chapter.id) {
            answer = idx;
        }
    })
    return answer;
}



function loadChapterPage(chapterIdx, pageIdx) {

    if (pageExists(chapterIdx, pageIdx)) {

        if (chapterIdx !== currentChapterIndex) {
            if (document.querySelector(".dook__index__item.selected")) {
                document.querySelector(".dook__index__item.selected").classList.remove("selected");
            }
            document.getElementById(chapters[chapterIdx].id).classList.add("selected");
            document.getElementById(chapters[chapterIdx].id).scrollIntoView();
            pageTitle.innerText = chapters[chapterIdx].title;
        }

        if (chapterIdx !== currentChapterIndex || pageIdx !== currentPageIndex) {

            pageCounter.innerText = `(${pageIdx + 1}/${chapters[chapterIdx].pages.length})`;
            loadHTMLFromFile(chapters[chapterIdx].pages[pageIdx].url, chapters[chapterIdx].pages[pageIdx].type);

        }

        currentChapterIndex = chapterIdx;
        currentPageIndex = pageIdx;

        if (nextPage()) {
            nextPageButton.classList.remove("inactive");
        } else {
            nextPageButton.classList.add("inactive");
        }

        if (previousPage()) {
            previousPageButton.classList.remove("inactive");
        } else {
            previousPageButton.classList.add("inactive");
        }
    }
}

function pageExists(chapterIdx, pageIdx) {
    if (chapterIdx < chapters.length) {
        if (pageIdx < chapters[chapterIdx].pages.length) {
            return true;
        }
    }
    return false;
}


function previousPage() {
    let answer = null;
    if (currentPageIndex - 1 < 0) {
        if (currentChapterIndex - 1 >= 0) {
            answer = { chapterIndex: currentChapterIndex - 1, pageIndex: chapters[currentChapterIndex - 1].pages.length - 1 };
        }
    } else {
        answer = { chapterIndex: currentChapterIndex, pageIndex: currentPageIndex - 1 };
    }
    return answer;
}

function nextPage() {
    let answer = null;
    if (currentPageIndex + 1 >= chapters[currentChapterIndex].pages.length) {
        if (currentChapterIndex + 1 < chapters.length) {
            answer = { chapterIndex: currentChapterIndex + 1, pageIndex: 0 };
        }
    } else {
        answer = { chapterIndex: currentChapterIndex, pageIndex: currentPageIndex + 1 };
    }
    return answer;
}

function loadNextPage() {
    const obj = nextPage();
    if (obj) {
        loadChapterPage(obj.chapterIndex, obj.pageIndex);
    }
}
function loadPreviousPage() {
    const obj = previousPage();
    if (obj) {
        loadChapterPage(obj.chapterIndex, obj.pageIndex);
    }
}



function loadHTMLFromFile(path, type) {

    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'blob';
    request.onload = function () {
        var reader = new FileReader();
        reader.readAsText(request.response);
        reader.onload = function (event) {
            
            const fileText = event.target.result;
            let htmlText = event.target.result;

            if (type === "html+md") {
                htmlText = loadHTMLMDfile(htmlText);
            }
            else {
                htmlText = loadMDFile(htmlText);
            }

            contentArea.innerHTML = htmlText;
        };
    };
    request.send();
}

function loadMDFile (fileText) {
    let converter = new showdown.Converter();
    return converter.makeHtml(fileText);
}

function loadHTMLMDfile(fileText) {

    let converter = new showdown.Converter();
    let htmlText = "";
    let substring = "";

    const openKey_start = "<markdown";
    const openKey_end = ">";
    const closeKey = "</markdown>";

    let substringStart = 0;
    let substringEnd = 0;
    let convertSubstring = false;

    let isSearchingOpenKeyStart = true;
    let isSearchingOpenKeyEnd = false;
    let isSearchingCloseKey = false;


    for (let i = 0; i < fileText.length; i++) {

        if (isSearchingOpenKeyStart && fileText.substring(i, i + openKey_start.length) === openKey_start) {
            substringEnd = i;
            substring = fileText.substring(substringStart, substringEnd);

            htmlText += substring;

            convertSubstring = false;
            substringStart = i;

            isSearchingOpenKeyStart = false;
            isSearchingOpenKeyEnd = true;
            i = substringStart;
        }
        else if (isSearchingOpenKeyEnd && fileText.substring(i, i + openKey_end.length) === openKey_end) {
            substringEnd = i + openKey_end.length;
            substring = fileText.substring(substringStart, substringEnd);

            htmlText += substring;

            convertSubstring = true;
            substringStart = i + openKey_end.length;

            isSearchingOpenKeyEnd = false;
            isSearchingCloseKey = true;
            i = substringStart;
        }

        else if (isSearchingCloseKey && fileText.substring(i, i + closeKey.length) === closeKey) {
            substringEnd = i;
            substring = fileText.substring(substringStart, substringEnd);

            htmlText += converter.makeHtml(substring);

            convertSubstring = false;
            substringStart = i;

            isSearchingCloseKey = false;
            isSearchingOpenKeyStart = true;
            i = substringStart;
        }

    }

    substringEnd = fileText.length;
    substring = fileText.substring(substringStart, substringEnd);
    htmlText += substring;

    return htmlText;
}




// -------------------- FLUXO

loadIndex();
loadChapterPage(0, 0);