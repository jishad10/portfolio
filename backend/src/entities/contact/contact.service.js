import { ContactConfig, ContactMessage } from './contact.model.js';

// Contact settings service
export const getContactConfigService = async () => {
  let config = await ContactConfig.findOne();
  if (!config) {
    config = await ContactConfig.create({});
  }
  return config;
};

export const updateContactConfigService = async (data) => {
  let config = await ContactConfig.findOne();
  if (config) {
    config = await ContactConfig.findByIdAndUpdate(config._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    config = await ContactConfig.create(data);
  }
  return config;
};

// Inbound contact messages CRUD
export const createContactMessageService = async (data) => {
  return await ContactMessage.create(data);
};

export const getAllContactMessagesService = async () => {
  return await ContactMessage.find().sort({ createdAt: -1 });
};

export const getContactMessageByIdService = async (id) => {
  return await ContactMessage.findById(id);
};

export const updateContactMessageStatusService = async (id, status) => {
  return await ContactMessage.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );
};

export const deleteContactMessageService = async (id) => {
  return await ContactMessage.findByIdAndDelete(id);
};
