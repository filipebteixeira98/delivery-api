import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';

import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController';

import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';

import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';

import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';

import { ensureAuthenticatedClient } from './middlewares/ensureAuthenticatedClient';

import { ensureAuthenticatedDeliveryman } from './middlewares/ensureAuthenticatedDeliveryman';

const routes = Router();

const createClientController = new CreateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const updateDeliverymanController = new UpdateDeliverymanController();

const updateEndDateController = new UpdateEndDateController();

const findAllAvailableController = new FindAllAvailableController();

const findAllClientDeliveriesController = new FindAllDeliveriesController();

const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

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

routes.post(
  '/delivery',
  ensureAuthenticatedClient,
  createDeliveryController.handle
);

routes.get(
  '/delivery/available',
  ensureAuthenticatedDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticatedDeliveryman,
  updateDeliverymanController.handle
);

routes.get(
  '/client/deliveries',
  ensureAuthenticatedClient,
  findAllClientDeliveriesController.handle
);

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticatedDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticatedDeliveryman,
  updateEndDateController.handle
);

export { routes };
