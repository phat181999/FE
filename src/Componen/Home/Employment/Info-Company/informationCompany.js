import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/company";
import Render from './render';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
 function InfomationCompany(props) {
    useEffect(() => {
        props.getInforEmloyer();
    }, []);
    const renderHTML = () => {
        const {getInfoEmloyer} =  props;
        return <Render render = {getInfoEmloyer}/>
    }
    return (
        <>
        <div>
            {renderHTML()}
        </div>
    <div className="container">
        <div className="row">
            <Button variant="contained" color="secondary" >Chỉnh sửa</Button>  
        </div>
    </div>
    <div className="renderInfoCompany">
        <Grid item xs={12} container >            
            <div className="container">
                <div className="row">
                    <div className="Info-left">
                        <div className="Info-left-item col-lg-5">
                            <span>Chào Mừng Bạn Đến Với Tôi</span>
                            <h2>name</h2>
                            <div>
                                <p>name</p>
                            </div>
                        </div>
                        <div className="Info-right-item col-lg-7 mt_md--40 mt_sm--40">
                            <div className="Info-right-item-Img">
                                <img src="/images/1200px-FPT_logo_2010.png"/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </Grid>
        <div className="About container">
            <div className="row row--35">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                            <div className='About-right-div-name'>
                                <span>Thông tin cá nhân</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Họ và tên: name</span>
                            </div>
                            <div className='About-right-div'> 
                                <span>Số điện thoại: name</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Địa chỉ: name</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Ngày sinh: name</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Học vấn: name</span>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Kĩ năng cá nhân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>name</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Giới thiệu bản thân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>name</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
        </>
    )
}
const mapStateToProp = state => {
    return {
        getInfoEmloyer: state.companyReducer.getInfoEmloyer
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        getInforEmloyer: () => {
            dispatch(Action.actGetInfoCompanyAPI());
        }
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(InfomationCompany)