import {DocHead} from 'meteor/kadira:dochead';
import { Meteor } from 'meteor/meteor';


export function addMeta() {
	let metaInfo = {name: 'viewport', content: 'width=device-width, initial-scale=1'};
	DocHead.addMeta(metaInfo);
	console.log("Added meta tag");
	DocHead.setTitle(Meteor.settings.public.MainTitle);
};

