import React, { Component } from 'react';

class NewsItem extends Component {
	render() {
		return (
  			<div className="bg-faded p-4 my-4">
			    <hr className="divider" />
			    <h2 className="text-center text-lg text-uppercase my-0">Mẹo nấu ăn ngon
			    </h2>
			    <hr className="divider" />
				<strong>1. Nêm muối đúng cách</strong>
			    <p>Không phải món ăn nào chúng ta cũng cho trực tiếp muối vào ngay từ khi nấu. Đối với các món ăn có các loại củ nên cho muối vào sớm hơn để muối ngấm đều vào củ còn đối với món rau luộc thì chỉ nên nêm muối trước khi bắc nồi xuống tránh cho việc các chất dinh dưỡng trong rau mất đi.</p>
				<strong>2. Dùng thêm nước khi làm món chiên xào</strong>
				<p>Khi xào rau hay món ăn thường bị khô đồng thời hàm lượng nước dinh dưỡng có trong rau hay bị bay hơi mất vì thế để giữ lại độ dinh dưỡng cho rau, khi chảo nóng bạn nên cho thêm 2-3 thìa canh nước để hơi nước nóng có thể làm rau chín tới mà không tiêu hao quá nhiều lượng nước ngọt có trong thành phần của rau, củ.</p>
			</div>
		);
	}
}

export default NewsItem;
