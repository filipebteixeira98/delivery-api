import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';

const routes = Router();

const createClientController = new CreateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const authenticateClientController = new AuthenticateClientController();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

routes.post('/client/authenticate', authenticateClientController.handle);

routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
);

routes.post('/client', createClientController.handle);

routes.post('/deliveryman', createDeliverymanController.handle);

routes.post('/delivery', createDeliveryController.handle);

export { routes };
