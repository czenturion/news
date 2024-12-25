import './news.css';
import { ArticleT } from '../../../types/types';


class News {
    draw(data: ArticleT[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            throw new Error('Template element #sourceItemTemp not found');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            newsClone.querySelector<HTMLTemplateElement>('.news__meta-photo')!.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                })`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const newsDescTitle = newsClone.querySelector('.news__description-title');
            if (newsDescTitle) newsDescTitle.textContent = item.title;
            
            const newsDescSource = newsClone.querySelector('.news__description-source');
            if (newsDescSource) newsDescSource.textContent = item.source.name;

            const newsDescContent = newsClone.querySelector('.news__description-content');
            if (newsDescContent) newsDescContent.textContent = item.description;

            const newsReadMore = newsClone.querySelector('.news__read-more a');
            if (newsReadMore) newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsTemp = document.querySelector('.news');

        if (newsTemp) {
            newsTemp.innerHTML = '';
            newsTemp.appendChild(fragment);
        }
    }
}

export default News;
