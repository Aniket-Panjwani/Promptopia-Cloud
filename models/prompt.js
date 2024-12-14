<<<<<<< HEAD
class Prompt {
  constructor(data) {
    this.creator = data.creator;
    this.prompt = data.prompt;
    this.tag = data.tag;
    this.type = 'prompt';
    this._id = data._id;
    this._rev = data._rev;
  }

  validate() {
    if (!this.prompt) throw new Error('Prompt is required.');
    if (!this.tag) throw new Error('Tag is required.');
    if (!this.creator) throw new Error('Creator is required.');
    if (!this.type) throw new Error('Type is required.');
  }
}
=======
import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

export default Prompt;