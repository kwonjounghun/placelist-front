import React from 'react';
import SelectBox from 'components/molecules/SelectBox';

const Fillter = ({FillterList, FillterHandle}) => {
    return (
        <div className="row">
            <div className="input-field col s4">
                <SelectBox placeholder="지역을 골라주세요." options={FillterList.sigugun} name="sigugun" FHandle={FillterHandle}/>
                <label>지역</label>
            </div>
            <div className="input-field col s4">
                <SelectBox placeholder="카테고리를 골라주세요" options={FillterList.category} name="category" FHandle={FillterHandle}/>
                <label>카테고리</label>
            </div>
            <div className="input-field col s4">
                <SelectBox placeholder="후기작성 글 보기" options={[]} name="review" FHandle={FillterHandle}/>
                <label>후기</label>
            </div>
        </div>
    );
};

export default Fillter;