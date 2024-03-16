import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { IonInput, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './ExploreContainer.css';

interface IFormInputs {
  price: number;
}

const ExploreContainer = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const [productPriceVat0, setProductPriceVat0] = useState(0);
  const [productPriceVat24, setProductPriceVat24] = useState(0);

  const onSubmit = (data: IFormInputs) => {
    setProductPriceVat0(data.price / 1.24);
    setProductPriceVat24(productPriceVat0 * 1.7);
  };

  return (
    <div id="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonItem>
          <IonLabel position="floating">Tuotteen hinta (ALV24)</IonLabel>
          <IonInput type="number" {...register('price')} required />
        </IonItem>

        <IonButton expand="full" type="submit">Calculate</IonButton>
      </form>

      <IonGrid>
        <IonRow>
          <IonCol>ALV0 hinta</IonCol>
          <IonCol>{productPriceVat0.toFixed(2)}</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>Muut veroluonteiset maksut</IonCol>
          <IonCol>{productPriceVat24.toFixed(2)}</IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
