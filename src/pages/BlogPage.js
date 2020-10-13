import React, { Component } from 'react';

import NewsItem from './../components/NewsItem';
import BlogItem from './../components/BlogItem';

class BlogPage extends Component {
	render() {

		return (
  			<div>
			    <BlogItem />
			    <BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
		);
	}
}


export default BlogPage;
