import React from 'react';
import CardContainer from '../elements/cardElements/CardContainer';
import CardDescription from '../elements/cardElements/CardDescription';
import CardElement from '../elements/cardElements/CardElement';
import CardLabel from '../elements/cardElements/CardLabel';
import LeftColumnContainer from '../elements/cardElements/LeftColumnContainer';
import RightColumnContainer from '../elements/cardElements/RightColumnContainer';
import SecondaryCardLabel from '../elements/cardElements/SecondaryCardLabel';

const GitHubCard = (props) => {
    return(
        <CardContainer>
            <LeftColumnContainer>
                <CardLabel>
                    {`classwork-${props.lastName}-${props.name}`}
                </CardLabel>
                <SecondaryCardLabel>
                    by talent-path
                </SecondaryCardLabel>
                <CardDescription>
                    Talent Path Cohort 20
                </CardDescription>
            </LeftColumnContainer>
            <RightColumnContainer>
                <CardElement>
                    <div>
                        <i className="fas fa-code-branch"></i>
                    </div>
                    <div style={{ marginLeft: '1em', color: '#081F32' }}>
                        {props.repos}
                    </div>
                    <div style={{ marginLeft: '0.3em', color: '#6E798C'}}>
                        forks
                    </div>
                </CardElement>
                <CardElement>
                    <div>
                        <i className="far fa-star"></i>
                    </div>
                    <div style={{ marginLeft: '1em', color: '#081F32' }}>
                        0
                    </div>
                    <div style={{ marginLeft: '0.3em', color: '#6E798C'}}>
                        stars
                    </div>
                </CardElement>
                <CardElement>
                    <div>
                        <i className="far fa-dot-circle"></i>
                    </div>
                    <div style={{ marginLeft: '1em', color: '#081F32'  }}>
                        0
                    </div>
                    <div style={{ marginLeft: '0.3em', color: '#6E798C'}}>
                        open issues
                    </div>
                </CardElement>
            </RightColumnContainer>
        </CardContainer>
    );
}

export default GitHubCard;