import React from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
    title: string;
    description: string;
}

const Detail: React.FC<IProps> = props => {
    const {title, description} = props;

    return (
        <ReactMarkdown source={`# ${title}\n\n${description}`}/>
    )
};

export default Detail;