import React, { Component } from 'react';

class BlogItem extends Component {
	render() {
		return (
		    <div className="bg-faded p-4 my-4">
			    <div className="card card-inverse">
			        <img className="card-img img-fluid w-100" src="img/slide-1.jpg" alt="slide-1" />
			        <div className="card-img-overlay bg-overlay">
			            <h2 className="card-title text-shadow text-white text-uppercase mb-2 text-xs">XỐT GIA VỊ HOÀN CHỈNH BARONA SƯỜN XÀO CHUA NGỌT</h2>
			            <h5 className="text-shadow text-white">March 1, 2017</h5>
			            <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block text-xs">
							Bước 1: Phi thơm hành tỏi băm, sau đó cho sườn vào xào săn.
						</p>
						<p className="lead card-text text-shadow text-white w-50 d-none d-lg-block text-xs">
							Bước 2: Cho 1 gói Xốt Gia Vị Hoàn Chỉnh Barona - Sườn Xào Chua Ngọt vào đảo đều khoảng 1 đến 2 phút cho gia vị chua ngọt thấm đều.
						</p>
						<p className="lead card-text text-shadow text-white w-50 d-none d-lg-block text-xs">
							Bước 3: Thêm nước xâm xấp mặt sườn (khoảng 1 chén), sau khi nước sôi vặn nhỏ lửa, nấu đến khi sườn chín mềm và nước xốt sệt lại.
						</p>
						<p className="lead card-text text-shadow text-white w-50 d-none d-lg-block text-xs">
							Bước 4: Cho sườn ra đĩa, dùng với cơm nóng.
						</p>
			            <a href="http://localhost:3000/" className="btn btn-secondary">xem thêm..</a>
			        </div>
			    </div>
			</div>
		);
	}
}

export default BlogItem;
