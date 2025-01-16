import React from "react";

function NewsItem(props) {
    let { desc, title, imageURL, newsUrl, sourceName } = props;
    console.log(props.title);

    return (
        <div>
            <div className="bg-white mt-24 shadow-md rounded-lg overflow-hidden my-3">
                <img
                    src={imageURL}
                    alt="News"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold mb-2">{title}</h5>
                    <p className="text-sm text-gray-500 text-right">- {sourceName}</p>
                    <p className="text-gray-700 my-2">{desc}</p>
                    <a
                        href={newsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Read More...
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
