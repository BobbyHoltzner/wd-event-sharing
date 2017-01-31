import * as React from "react";
import {MetaType} from "./datatypes/index";
import {ShareButtons, ShareCounts, generateShareIcon} from "react-share";
const {FacebookShareButton} = ShareButtons;
const {FacebookShareCount} = ShareCounts;
const FacebookIcon = generateShareIcon("Facebook");

type Props = {
    meta: MetaType
}

export default class Facebook extends React.Component<Props, {}> {
    render() {
        const {url, title, description, image} = this.props.meta; 
        return (
            <FacebookShareButton url={url} title={title} description={description} image={image} className="facebook__button">
                <FacebookIcon size={28}/>
                <p className="facebook__shareText">Share</p>
                <FacebookShareCount url={url}>
                    {shareCount => (
                        <span className="facebook__shareCount">{shareCount}</span>
                    )}
                </FacebookShareCount>
            </FacebookShareButton>
        )
    }
}