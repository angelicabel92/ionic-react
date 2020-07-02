import React from 'react';
import { IonRow, IonCol, IonCard } from '@ionic/react';

export interface ResultCalculateComponentProps {
    resultImb: number;
}
 
const ResultCalculateComponent: React.SFC<ResultCalculateComponentProps> = ({resultImb}) => {
    return (
        <IonRow>
          <IonCol>
            <IonCard className="ion-text-center">
                <h1>Your Body Mass is:</h1>
                <h4>{resultImb.toFixed(2)}</h4>
            </IonCard>
          </IonCol>
        </IonRow>
    );
}
 
export default ResultCalculateComponent;
