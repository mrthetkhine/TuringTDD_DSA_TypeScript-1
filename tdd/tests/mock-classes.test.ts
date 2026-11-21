import SoundPlayer from "../src/SoundPlayer";
import SoundPlayerConsumer from "../src/SoungPlayerConsumer";


jest.mock('../src/SoundPlayer');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (SoundPlayer as any).mockClear();
});
describe('Sound Player', () => {
    test('We can check if the consumer called the class constructor',()=>{
        const soundPlayerConsumer = new SoundPlayerConsumer();
        expect(SoundPlayer).toHaveBeenCalledTimes(1);

        const coolSoundFileName = 'song.mp3';
        soundPlayerConsumer.playSomethingCool();

        const mockSoundPlayerInstance = (SoundPlayer as any).mock.instances[0];
        const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
        expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
        // Equivalent to above check:
        expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
        expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
    });
})
